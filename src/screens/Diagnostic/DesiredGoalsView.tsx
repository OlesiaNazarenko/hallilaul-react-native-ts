import React, { useContext } from "react"
import { ThemeContext } from "styled-components/native"
import { useTranslation } from "react-i18next"
import { DefaultTFuncReturn, TFunction } from "i18next"

import { AppBar } from "../../components/appBar"
import { Container } from "../../components/container"
import { LinearGradientBg } from "../../components/linearGradientBg"
import { DesiredGoalsViewProps } from "./types"
import { BodyText } from "../../components/typography/bodyText"
import { Heading1 } from "../../components/typography/headings"
import { ButtonsContainer } from "./ButtonsContainer"
import SettingsIcon from "../../assets/icons/settings.svg"
import BackArrow from "../../assets/icons/Back.svg"
import { ThemeColor } from "../../utils/theme"

export const DesiredGoalsView = ({ navigation }: DesiredGoalsViewProps) => {
  const themePalette = useContext<ThemeColor>(ThemeContext)
  const { t }: { t: TFunction } = useTranslation()

  const desiredGoalsData: { label: DefaultTFuncReturn; id: number }[] = [
    { label: t("desiredGoalsCalming"), id: 0 },
    { label: t("desiredGoalsBalance"), id: 1 },
    { label: t("desiredGoalsRestoringSleep"), id: 2 },
    { label: t("desiredGoalsHarmony"), id: 3 },
  ]

  return (
    <LinearGradientBg>
      <Container>
        <AppBar
          navigation={navigation}
          hasHeaderRight
          rightButtonIcon={
            <SettingsIcon
              width={24}
              height={24}
              stroke={themePalette.text}
              fill="transparent"
            />
          }
          headerRightScreen="Settings"
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
        <BodyText
          text="3/3"
          color={themePalette.textSecondary}
          alignment="right"
          margin
        />
        <Heading1
          text={t("desiredGoalsHeading")}
          color={themePalette.text}
          alignment="left"
        />
        <ButtonsContainer
          data={desiredGoalsData}
          onPressIn={() => navigation.navigate("Calculating")}
        />
      </Container>
    </LinearGradientBg>
  )
}
