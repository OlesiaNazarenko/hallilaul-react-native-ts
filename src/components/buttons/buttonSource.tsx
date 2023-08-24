import React from "react"
import styled from "styled-components/native"
import { BodyBoldText } from "../typography/bodyText"
import ForwardArrow from "../../assets/icons/forward.svg"

interface ButtonSourceProps {
  label: string
  color: string
  background: string
  onPressIn: () => void
  icon?: boolean
}
interface ButtonSourceStyledProps {
  background: string
}
interface ButtonSourceSecondaryProps {
  label: string
  color: string
  background: string
  onPressIn: () => void
}

interface ButtonSourceSecondaryStyledProps {
  background: string
  color: string
}
const ButtonSourceStyled = styled.TouchableOpacity<ButtonSourceStyledProps>`
  background: ${(props: ButtonSourceStyledProps) => props.background};
  border-radius: 40px;
  border: 1px solid transparent;
  margin-top: 32px;
  padding-top: 16px;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const IconContainer = styled.View`
  margin-left: 10px;
`

export function ButtonSource({
  onPressIn,
  label,
  color,
  icon,
  background,
}: ButtonSourceProps) {
  return (
    <ButtonSourceStyled background={background} onPressIn={() => onPressIn()}>
      <BodyBoldText
        color={color}
        text={label}
        alignment="center"
        margin={false}
      />
      {icon && (
        <IconContainer>
          <ForwardArrow width={24} height={24} stroke={color} />
        </IconContainer>
      )}
    </ButtonSourceStyled>
  )
}

const ButtonSourceSecondaryStyled = styled.TouchableOpacity`
  background: ${(props: ButtonSourceSecondaryStyledProps) => props.background};
  border-radius: 40px;
  display: flex;
  justify-content: center;
  border-width: 1.5px;
  height: 56px;
  width: 100%;
  margin: 8px 0px;
  border-color: ${(props: ButtonSourceSecondaryStyledProps) => props.color};
`

export function ButtonSourceSecondary({
  onPressIn,
  color,
  label,
  background,
}: ButtonSourceSecondaryProps) {
  return (
    <ButtonSourceSecondaryStyled
      background={background}
      color={color}
      onPressIn={() => onPressIn()}
    >
      <BodyBoldText
        color={color}
        text={label.toString()}
        alignment="center"
        margin={false}
      />
    </ButtonSourceSecondaryStyled>
  )
}

ButtonSource.defaultProps = {
  icon: false,
}
