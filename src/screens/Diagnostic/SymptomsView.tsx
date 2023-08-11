import React, { useContext } from "react"
import { DefaultTFuncReturn, TFunction } from "i18next"
import { ThemeContext } from "styled-components/native"
import { useTranslation } from "react-i18next"

import { AppBar } from "../../components/appBar"
import { Container } from "../../components/container"
import { LinearGradientBg } from "../../components/linearGradientBg"
import { BodyText } from "../../components/typography/bodyText"
import { Heading1 } from "../../components/typography/headings"
import { ButtonsContainer } from "./ButtonsContainer"
import { SymptomsViewProps } from "./types"

import SettingsIcon from "../../assets/icons/settings.svg"
import BackArrow from "../../assets/icons/Back.svg"
import { ThemeColor } from "../../utils/theme"

export const SymptomsView = ({ navigation }: SymptomsViewProps) => {
  const themePalette = useContext<ThemeColor>(ThemeContext)
  const { t }: { t: TFunction } = useTranslation()

  const symptomsData: { label: DefaultTFuncReturn; id: number }[] = [
    { label: t("symptomLossOfStrength"), id: 0 },
    { label: t("symptomInsomnia"), id: 1 },
    { label: t("symptomInstability"), id: 2 },
    { label: t("symptomIndifference"), id: 3 },
    { label: t("symptomPanic"), id: 4 },
    { label: t("symptomIrritationResentment"), id: 5 },
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
          headerLeftScreen="Home"
        />
        <BodyText
          text="1/3"
          color={themePalette.textSecondary}
          alignment="right"
          margin
        />
        <Heading1
          color={themePalette.text}
          text={t("symptomHeading")}
          alignment="left"
        />

        <ButtonsContainer
          data={symptomsData}
          onPressIn={() => navigation.navigate("SymptomsType")}
        />
      </Container>
    </LinearGradientBg>
  )
}
