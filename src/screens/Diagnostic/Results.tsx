import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import { TFunction } from "i18next"
import { ThemeContext } from "styled-components/native"

import { AppBar } from "../../components/appBar"
import { Container } from "../../components/container"
import { LinearGradientBg } from "../../components/linearGradientBg"
import SettingsIcon from "../../assets/icons/settings.svg"
import { BodyText } from "../../components/typography/bodyText"
import { Heading1 } from "../../components/typography/headings"
import { ButtonSource } from "../../components/buttons/buttonSource"
import { LullabyViewProps } from "../Lullaby/LullabyMainScreen/types"
import { ThemeColor } from "../../utils/theme"

export const ResultsView = ({ navigation }: LullabyViewProps) => {
  const themePalette = useContext<ThemeColor>(ThemeContext)
  const { t }: { t: TFunction } = useTranslation()

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
          hasHeaderLeft={false}
        />
        <Heading1
          text={t("resultsScreenHeading")}
          color={themePalette.text}
          alignment="left"
        />
        <BodyText
          text={t("resultsScreenLabel1")}
          color={themePalette.text}
          alignment="left"
          margin
        />
        <BodyText
          text={t("resultsScreenLabel2")}
          color={themePalette.text}
          alignment="left"
          margin
        />
        <BodyText
          text={t("resultsScreenLabel3")}
          color={themePalette.text}
          alignment="left"
          margin
        />
        <ButtonSource
          onPressIn={() => {
            navigation.navigate("Lullaby")
          }}
          label={t("resultsScreenButton")}
          color={themePalette.primary}
          background={themePalette.secondary}
          icon={false}
        />
      </Container>
    </LinearGradientBg>
  )
}
