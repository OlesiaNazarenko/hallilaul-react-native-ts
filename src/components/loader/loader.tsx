import React from "react"
import styled from "styled-components/native"
import LottieView from "lottie-react-native"

interface LoaderProps {
  onAnimationFinish?: Function
}

const LoaderView = styled.View`
  height: 200px;
  margin-top: 100px;
`

export function Loader({ onAnimationFinish }: LoaderProps) {
  return (
    <LoaderView>
      <LottieView
        // eslint-disable-next-line global-require
        source={require("@components/loader/Lullabel.json")}
        autoPlay
        loop={false}
        onAnimationFinish={() => onAnimationFinish && onAnimationFinish()}
      />
    </LoaderView>
  )
}

Loader.defaultProps = {
  onAnimationFinish: () => {},
}
