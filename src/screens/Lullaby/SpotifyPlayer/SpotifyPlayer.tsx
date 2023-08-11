import React, { useContext, useEffect, useState } from "react"
import { NativeEventEmitter, NativeModules, Platform } from "react-native"
import { ThemeContext } from "styled-components/native"
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  IOSCategory,
  IOSCategoryOptions,
  RepeatMode,
  Track,
  useProgress,
} from "react-native-track-player"

import { ThemeColor } from "../../../utils/theme"

import { SpotifyPlayerContent } from "./SpotifyPlayerContent"

interface SpotifyPlayerProps {
  song: any
  visualBtnlLabel: string
  repeatBtnLabel: string
}

export function SpotifyPlayer({
  song,
  visualBtnlLabel,
  repeatBtnLabel,
}: SpotifyPlayerProps) {
  const themePalette = useContext<ThemeColor>(ThemeContext)
  const [isTrackPlayerReady, setIsTrackPlayerReady] = useState<boolean>(false)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isRepeatModeOn, setIsRepeatModeOn] = useState<boolean>(false)
  const { position } = useProgress()
  const { duration } = useProgress()
  const timeLeft: string = (duration - position).toFixed(2)
  const { TrackPlayerModule } = NativeModules
  const TrackPlayerEvents = new NativeEventEmitter(TrackPlayerModule)

  async function setupPlayer(): Promise<boolean> {
    let isSetup: boolean = false
    try {
      await TrackPlayer.getCurrentTrack()
      isSetup = true
    } catch {
      await TrackPlayer.setupPlayer()
      await TrackPlayer.updateOptions({
        android: {
          appKilledPlaybackBehavior:
            AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
        },
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.SeekTo,
        ],
        compactCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
        ],
        progressUpdateEventInterval: 2,
      })
      if (Platform.OS === "ios") {
        TrackPlayerEvents.emit("setCategory", {
          category: IOSCategory.Playback,
          options: [
            IOSCategoryOptions.MixWithOthers,
            IOSCategoryOptions.DuckOthers,
          ],
        })
      }
      isSetup = true
    }
    return isSetup
  }

  async function initializePlayer() {
    try {
      const isSetup: boolean = await setupPlayer()
      const queue: Track[] = await TrackPlayer.getQueue()

      if (
        isSetup &&
        queue.length <= 0 &&
        song &&
        Object.keys(song).length !== 0
      ) {
        await TrackPlayer.add([
          {
            id: song.id,
            url: song.preview_url,
            title: song.name,
            artist: song.artists[0].name,
            duration: song.duration_ms,
          },
        ])
      }
      setIsTrackPlayerReady(true)
    } catch (error) {
      console.error("Error occurred during player setup:", error)
    }
  }

  useEffect(() => {
    initializePlayer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const playPlayback: () => Promise<void> = async () => {
    setIsPlaying(true)
    await TrackPlayer.play()
  }

  const pausePlayback: () => Promise<void> = async () => {
    setIsPlaying(false)
    await TrackPlayer.pause()
  }

  const handleRepeat: () => void = () => setIsRepeatModeOn((prev) => !prev)

  useEffect(() => {
    async function setRepeatMode(): Promise<RepeatMode> {
      return isRepeatModeOn
        ? TrackPlayer.setRepeatMode(RepeatMode.Track)
        : TrackPlayer.setRepeatMode(RepeatMode.Off)
    }
    if (isTrackPlayerReady) {
      setRepeatMode()
    }
  }, [isRepeatModeOn, isTrackPlayerReady])

  return (
    <SpotifyPlayerContent
      isTrackPlayerReady={isTrackPlayerReady}
      duration={duration}
      position={position}
      timeLeft={timeLeft}
      themePalette={themePalette}
      repeatBtnLabel={repeatBtnLabel}
      isRepeatModeOn={isRepeatModeOn}
      handleRepeat={handleRepeat}
      visualBtnlLabel={visualBtnlLabel}
      isPlaying={isPlaying}
      pausePlayback={pausePlayback}
      playPlayback={playPlayback}
    />
  )
}
