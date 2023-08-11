import React, { useContext } from "react"
import { ThemeContext } from "styled-components/native"
import { DefaultTFuncReturn, TFunction } from "i18next"
import { useTranslation } from "react-i18next"

import { AppBar } from "../../components/appBar"
import { Container } from "../../components/container"
import { LinearGradientBg } from "../../components/linearGradientBg"
import { SymptomsTypeViewProps } from "./types"
import { Heading1 } from "../../components/typography/headings"
import { BodyText } from "../../components/typography/bodyText"
import { ButtonsContainer } from "./ButtonsContainer"
import SettingsIcon from "../../assets/icons/settings.svg"
import BackArrow from "../../assets/icons/Back.svg"
import { ThemeColor } from "../../utils/theme"

export const SymptomsTypeView = ({ navigation }: SymptomsTypeViewProps) => {
  const themePalette = useContext<ThemeColor>(ThemeContext)
  const { t }: { t: TFunction } = useTranslation()

  const symptomsTypeData: { label: DefaultTFuncReturn; id: number }[] = [
    { label: t("symptomTypeWeek"), id: 0 },
    { label: t("symptomTypeAverage"), id: 1 },
    { label: t("symptomTypeStrong"), id: 2 },
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
          text="2/3"
          color={themePalette.textSecondary}
          alignment="right"
          margin
        />
        <Heading1
          text={t("symptomTypeHeading")}
          color={themePalette.text}
          alignment="left"
        />
        <ButtonsContainer
          data={symptomsTypeData}
          onPressIn={() => navigation.navigate("DesiredGoals")}
        />
      </Container>
    </LinearGradientBg>
  )
}
