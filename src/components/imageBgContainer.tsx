import React from "react"
import { ImageSourcePropType } from "react-native"
import styled from "styled-components/native"

const ImageBackgroundView = styled.ImageBackground`
  flex: 1;
`

interface ImageBgContainerProps {
  children: React.ReactNode
  bgImage: ImageSourcePropType
}

export function ImageBgContainer({ children, bgImage }: ImageBgContainerProps) {
  return <ImageBackgroundView source={bgImage}>{children}</ImageBackgroundView>
}
