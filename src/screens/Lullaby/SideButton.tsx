import React from "react"
import styled from "styled-components/native"
import RepeatIcon from "../../assets/icons/Repeat.svg"
import VisualIcon from "../../assets/icons/Image.svg"
import { BodyTinyText } from "../../components/typography/bodyText"

interface SideButtonProps {
  text: string
  strokeColor: string
  onPress: Function
}

const TextButtonStyled = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 52px;
  align-self: center;
`

export function SideButton({ onPress, strokeColor, text }: SideButtonProps) {
  return (
    <TextButtonStyled onPress={() => onPress()}>
      {text === ("Visual" || "Visuaalne") ? (
        <VisualIcon
          width={24}
          height={22}
          stroke={strokeColor}
          fill="transparent"
        />
      ) : (
        <RepeatIcon
          width={24}
          height={22}
          stroke={strokeColor}
          fill="transparent"
        />
      )}
      <BodyTinyText
        text={text}
        color={strokeColor}
        alignment="center"
        margin={false}
      />
    </TextButtonStyled>
  )
}
