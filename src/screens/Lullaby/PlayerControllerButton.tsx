import React from "react"
import PlayIcon from "../../assets/icons/Play.svg"
import PauseIcon from "../../assets/icons/Pause.svg"

interface PlayerControllerButtonProps {
  isPlaying: boolean
  strokeColor: string
}

export const PlayerControllerButton = ({
  isPlaying,
  strokeColor,
}: PlayerControllerButtonProps) =>
  isPlaying ? (
    <PauseIcon width={32} height={32} stroke={strokeColor} fill="transparent" />
  ) : (
    <PlayIcon width={32} height={32} stroke={strokeColor} fill="transparent" />
  )
