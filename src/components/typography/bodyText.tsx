import React from "react"
import styled from "styled-components/native"

interface TextProps {
  text: string
  color: string
  alignment: string | "left"
  margin: boolean | false
}

interface TextStyledProps {
  color: string
  alignment: string | "left"
  margin: boolean | false
}

const BodyBig = styled.Text<TextStyledProps>`
  font-size: 19px;
  line-height: 24px;
  text-align: ${(props: TextStyledProps) => props.alignment || "auto"};
  font-weight: 400;
  letter-spacing: 0;
  color: ${(props: TextStyledProps) => props.color};
`

export function BodyBigText({ color, text, alignment, margin }: TextProps) {
  return (
    <BodyBig color={color} alignment={alignment} margin={margin}>
      {text}
    </BodyBig>
  )
}

const BodyBigBold = styled.Text<TextStyledProps>`
  font-size: 19px;
  line-height: 24px;
  text-align: ${(props: TextStyledProps) => props.alignment || "auto"};
  font-weight: 700;
  letter-spacing: -0.32px;
  color: ${(props: TextStyledProps) => props.color};
`

export function BodyBigBoldText({ color, text, alignment, margin }: TextProps) {
  return (
    <BodyBigBold color={color} alignment={alignment} margin={margin}>
      {text}
    </BodyBigBold>
  )
}

const Body = styled.Text<TextStyledProps>`
  font-size: 17px;
  line-height: 24px;
  text-align: ${(props: TextStyledProps) => props.alignment || "auto"};
  font-weight: 400;
  letter-spacing: 0;
  color: ${(props: TextStyledProps) => props.color};
  margin-bottom: ${(props: TextStyledProps) => (props.margin ? "24px" : 0)};
`

export function BodyText({ color, text, alignment, margin }: TextProps) {
  return (
    <Body color={color} alignment={alignment} margin={margin}>
      {text}
    </Body>
  )
}

const BodyBold = styled.Text<TextStyledProps>`
  font-size: 17px;
  line-height: 24px;
  text-align: ${(props: TextStyledProps) => props.alignment || "auto"};
  font-weight: 700;
  letter-spacing: -0.32px;
  color: ${(props: TextStyledProps) => props.color};
`

export function BodyBoldText({ color, text, alignment, margin }: TextProps) {
  return (
    <BodyBold color={color} alignment={alignment} margin={margin}>
      {text}
    </BodyBold>
  )
}

const BodySmall = styled.Text<TextStyledProps>`
  font-size: 14px;
  line-height: 24px;
  text-align: ${(props: TextStyledProps) => props.alignment || "auto"};
  font-weight: 400;
  letter-spacing: 0.16px;
  color: ${(props: TextStyledProps) => props.color};
`

export function BodySmallText({ color, alignment, text, margin }: TextProps) {
  return (
    <BodySmall color={color} alignment={alignment} margin={margin}>
      {text}
    </BodySmall>
  )
}

const BodySmallBold = styled.Text<TextStyledProps>`
  font-size: 14px;
  line-height: 24px;
  text-align: ${(props: TextStyledProps) => props.alignment || "auto"};
  font-weight: 700;
  letter-spacing: -0.16px;
  color: ${(props: TextStyledProps) => props.color};
`

export function BodySmallBoldText({
  alignment,
  color,
  text,
  margin,
}: TextProps) {
  return (
    <BodySmallBold color={color} alignment={alignment} margin={margin}>
      {text}
    </BodySmallBold>
  )
}

const BodyTiny = styled.Text<TextStyledProps>`
  font-size: 12px;
  line-height: 16px;
  text-align: ${(props: TextStyledProps) => props.alignment || "auto"};
  font-weight: 400;
  letter-spacing: 0.32px;
  color: ${(props: TextStyledProps) => props.color};
`

export function BodyTinyText({ alignment, color, text, margin }: TextProps) {
  return (
    <BodyTiny color={color} alignment={alignment} margin={margin}>
      {text}
    </BodyTiny>
  )
}

const BodyTinyBold = styled.Text<TextStyledProps>`
  font-size: 12px;
  line-height: 16px;
  text-align: ${(props: TextStyledProps) => props.alignment || "auto"};
  font-weight: 700;
  letter-spacing: 0.16px;
  color: ${(props: TextStyledProps) => props.color};
`

export function BodyTinyBoldText({
  alignment,
  color,
  text,
  margin,
}: TextProps) {
  return (
    <BodyTinyBold color={color} alignment={alignment} margin={margin}>
      {text}
    </BodyTinyBold>
  )
}
