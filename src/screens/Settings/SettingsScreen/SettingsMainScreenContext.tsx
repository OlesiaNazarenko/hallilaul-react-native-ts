import React from "react"
import { TFunction } from "i18next"

import { LinearGradientBg } from "../../../components/linearGradientBg"

import { AppBar } from "../../../components/appBar"
import { Container } from "../../../components/container"
import { SettingsRowView } from "../SettingsRow"
import CloseIcon from "../../../assets/icons/Close.svg"
import GlobeIcon from "../../../assets/icons/Globe.svg"
import DarkModeIcon from "../../../assets/icons/DarkLightMode.svg"
import { ThemeColor } from "../../../utils/theme"
import { SettingsMainScreenProps } from "../types"

interface SettingsMainScreenContentProps {
  navigation: SettingsMainScreenProps["navigation"]
  themePalette: ThemeColor
  currentLanguage: string
  themeName: string
  t: TFunction<"translation", undefined, "translation">
}

export function SettingsMainScreenContent({
  navigation,
  themePalette,
  currentLanguage,
  themeName,
  t,
}: SettingsMainScreenContentProps) {
  return (
    <LinearGradientBg>
      <Container>
        <AppBar
          navigation={navigation}
          hasHeaderRight={false}
          headerRightScreen=""
          hasHeaderLeft
          leftButtonIcon={
            <CloseIcon height={26} width={22} stroke={themePalette.text} />
          }
          appBarLabelText={t("settingsScreenHeading")}
          appBarLabelColor={themePalette.text}
          appBarLabelAlignment="left"
        />
        <SettingsRowView
          navigation={{ navigation }}
          settingsRowLabel={t("settingsScreenChooseLanguageLabel")}
          targetPage="Language"
          icon={
            <GlobeIcon
              width={24}
              height={24}
              stroke={themePalette.text}
              fill="transparent"
            />
          }
          currentValue={currentLanguage}
        />
        <SettingsRowView
          navigation={{ navigation }}
          targetPage="Mode"
          settingsRowLabel={t("settingsScreenChooseModeLabel")}
          icon={
            <DarkModeIcon
              width={24}
              height={24}
              stroke={themePalette.text}
              fill="transparent"
            />
          }
          currentValue={themeName}
        />
      </Container>
    </LinearGradientBg>
  )
}
