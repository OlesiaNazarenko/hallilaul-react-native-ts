import React, { useContext, useEffect, useRef } from "react"
import { Animated, Easing } from "react-native"
import { TFunction } from "i18next"
import { useTranslation } from "react-i18next"
import { ThemeContext } from "styled-components/native"

import { Loader } from "@components/loader/loader"
import { AppBar } from "@components/appBar"
import { Container } from "@components/container"
import { LinearGradientBg } from "@components/linearGradientBg"
import BackArrow from "@assets/icons/Back.svg"
import { BodyText } from "@components/typography/bodyText"
import { ThemeColor } from "../../utils/theme"
import { CalculatingViewProps } from "./types"

export const CalculatingView = ({ navigation }: CalculatingViewProps) => {
  const { t }: { t: TFunction } = useTranslation()
  const themePalette = useContext<ThemeColor>(ThemeContext)
  const animationProgress = useRef(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start()
  }, [])

  return (
    <LinearGradientBg>
      <Container>
        <AppBar
          navigation={navigation}
          hasHeaderRight={false}
          hasHeaderLeft
          leftButtonIcon={
            <BackArrow
              height={26}
              width={26}
              stroke={themePalette.text}
              fill="transparent"
            />
          }
        />
        <Loader onAnimationFinish={() => navigation.navigate("Results")} />
        <BodyText
          text={t("calculatingLabel")}
          color={themePalette.textSecondary}
          alignment="center"
          margin={false}
        />
      </Container>
    </LinearGradientBg>
  )
}
