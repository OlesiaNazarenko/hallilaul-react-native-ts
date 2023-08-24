import React from "react"
import Slider from "@react-native-community/slider"
import styled from "styled-components/native"

import { ThemeColor } from "../../utils/theme"
import { BodyTinyText } from "../../components/typography/bodyText"

interface SongSliderProps {
  themePalette: ThemeColor
  duration: string
  position: string
  timeLeft: string
  seekTo: (e: number) => {
    void(e: number): number
  }
}

const SliderContainer = styled.View`
  margin-bottom: 40px;
`

const TimestampContainer = styled.View`
  padding: 0 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export function SongSlider({
  themePalette,
  duration,
  timeLeft,
  position,
  seekTo,
}: SongSliderProps) {
  const modifiedTimeString = (timeString: string) => {
    const [minutes, seconds] = timeString.split(".")
    return `${minutes}:${seconds}`
  }

  return (
    <SliderContainer>
      <Slider
        value={Number(timeLeft)}
        onValueChange={(e: number) => seekTo(Number(duration) - e)}
        minimumValue={0.0}
        maximumValue={Number(duration)}
        inverted
        maximumTrackTintColor={themePalette.secondary}
        minimumTrackTintColor="#fff"
        tapToSeek
      />
      <TimestampContainer>
        <BodyTinyText
          text={modifiedTimeString(position)}
          color="#fff"
          alignment="right"
          margin={false}
        />
        <BodyTinyText
          text={modifiedTimeString(duration)}
          color="#fff"
          alignment="left"
          margin={false}
        />
      </TimestampContainer>
    </SliderContainer>
  )
}
