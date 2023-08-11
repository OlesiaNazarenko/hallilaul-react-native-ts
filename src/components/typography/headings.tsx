import React from "react"
import styled from "styled-components/native"

interface HeadingProps {
  text: string
  color: string
  alignment: string
}

interface HeadingStyledProps {
  color: string
  alignment: string
}

const Heading1Styled = styled.Text<HeadingStyledProps>`
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  text-align: ${(props: HeadingStyledProps) => props.alignment || "auto"};
  letter-spacing: 0.16px;
  color: ${(props: HeadingStyledProps) => props.color};
  margin-bottom: 32px;
`

export function Heading1({ alignment, text, color }: HeadingProps) {
  return (
    <Heading1Styled alignment={alignment} color={color}>
      {text}
    </Heading1Styled>
  )
}

const Heading2Styled = styled.Text<HeadingStyledProps>`
  font-size: 28px;
  line-height: 32px;
  text-align: ${(props: HeadingStyledProps) => props.alignment || "auto"};
  font-weight: 700;
  letter-spacing: 0;
  color: ${(props: HeadingStyledProps) => props.color};
`

export function Heading2({ text, alignment, color }: HeadingProps) {
  return (
    <Heading2Styled color={color} alignment={alignment}>
      {text}
    </Heading2Styled>
  )
}

const Heading3Styled = styled.Text<HeadingStyledProps>`
  font-size: 24px;
  line-height: 28px;
  text-align: ${(props: HeadingStyledProps) => props.alignment || "auto"};
  font-weight: 700;
  letter-spacing: 0;
  color: ${(props: HeadingStyledProps) => props.color};
`

export function Heading3({ text, color, alignment }: HeadingProps) {
  return (
    <Heading3Styled color={color} alignment={alignment}>
      {text}
    </Heading3Styled>
  )
}
