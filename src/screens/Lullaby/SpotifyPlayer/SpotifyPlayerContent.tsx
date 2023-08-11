import React from "react"
import { View } from "react-native"
import styled from "styled-components/native"
import TrackPlayer from "react-native-track-player"

import { PlayerControllerButton } from "../PlayerControllerButton"
import { SideButton } from "../SideButton"
import { Loader } from "../../../components/loader/loader"
import { SongSlider } from "../SongSlider"
import { ThemeColor } from "../../../utils/theme"

interface PlayControllerButtonProps {
  backgroundColor: string
}

interface SpotifyPlayerContentProps {
  isTrackPlayerReady: boolean
  duration: number
  position: number
  timeLeft: string
  themePalette: ThemeColor
  repeatBtnLabel: string
  isRepeatModeOn: boolean
  handleRepeat: () => void
  isPlaying: boolean
  pausePlayback: () => Promise<void>
  playPlayback: () => Promise<void>
  visualBtnlLabel: string
}

const PlayerControllerContainer = styled.View`
  position: relative;
  height: auto;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const PlayerButtonStyled = styled.TouchableOpacity<PlayControllerButtonProps>`
  width: 64px;
  height: 64px;
  margin: 0 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: PlayControllerButtonProps) =>
    props.backgroundColor};
  border-radius: 40px;
`

const ControlButtons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

export function SpotifyPlayerContent({
  isTrackPlayerReady,
  duration,
  position,
  timeLeft,
  themePalette,
  repeatBtnLabel,
  isRepeatModeOn,
  handleRepeat,
  isPlaying,
  pausePlayback,
  playPlayback,
  visualBtnlLabel,
}: SpotifyPlayerContentProps) {
  return (
    <View>
      {!isTrackPlayerReady && <Loader />}
      {isTrackPlayerReady && (
        <>
          <SongSlider
            duration={duration.toFixed(2)}
            position={position.toFixed(2)}
            timeLeft={timeLeft}
            themePalette={themePalette}
            seekTo={TrackPlayer.seekTo}
          />
          <PlayerControllerContainer>
            <ControlButtons>
              <SideButton
                text={repeatBtnLabel}
                strokeColor={
                  isRepeatModeOn
                    ? themePalette.secondary
                    : themePalette.textSecondary
                }
                onPress={() => handleRepeat()}
              />
              <PlayerButtonStyled
                backgroundColor={
                  isPlaying === true
                    ? themePalette.success
                    : themePalette.secondary
                }
                onPressIn={() =>
                  isPlaying === true ? pausePlayback() : playPlayback()
                }
              >
                <PlayerControllerButton
                  isPlaying={isPlaying}
                  strokeColor={themePalette.textOnPrimaryColor}
                />
              </PlayerButtonStyled>
              <SideButton
                text={visualBtnlLabel}
                strokeColor={themePalette.textSecondary}
                onPress={() => {}}
              />
            </ControlButtons>
          </PlayerControllerContainer>
        </>
      )}
    </View>
  )
}
