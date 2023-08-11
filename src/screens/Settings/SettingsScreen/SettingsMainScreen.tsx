import React, { useContext } from "react"
import { TFunction } from "i18next"
import { useTranslation } from "react-i18next"
import { ThemeContext } from "styled-components/native"

import { getDefaultThemeSelector } from "../../../redux/theme/selectors"
import {
  LanguageNameType,
  getCurrentLanguageSelector,
} from "../../../redux/language/selectors"
import { useAppSelector } from "../../../utils/hooks"

import { ThemeColor } from "../../../utils/theme"
import { SettingsMainScreenProps } from "../types"
import { Theme } from "../../../redux/theme/themeReducer"
import { SettingsMainScreenContent } from "./SettingsMainScreenContext"

const currentLanguageLabel = (
  currentLanguage: LanguageNameType,
  engLabel: string,
  estLabel: string
) => (currentLanguage === "English" ? engLabel : estLabel)

export const themeName = (
  currentThemeName: string,
  darkModeLabel: string,
  lightModeLabel: string
) => (currentThemeName === "Dark" ? darkModeLabel : lightModeLabel)

export function SettingsMainScreen({ navigation }: SettingsMainScreenProps) {
  const { t }: { t: TFunction } = useTranslation()
  const themePalette = useContext<ThemeColor>(ThemeContext)
  const currentLanguage = useAppSelector<LanguageNameType>(
    getCurrentLanguageSelector
  )
  const currentThemeName = useAppSelector<Theme>(getDefaultThemeSelector).name
  const darkModeLabel = t("settingsScreenDarkMode")
  const lightModeLabel = t("settingsScreenLightMode")
  const englishLanguageLabel = t("settingsScreenEnglishLanguageLabel")
  const estonianLanguageLabel = t("settingsScreenEstonianLanguageLabel")

  return (
    <SettingsMainScreenContent
      navigation={navigation}
      themePalette={themePalette}
      themeName={themeName(currentThemeName, darkModeLabel, lightModeLabel)}
      currentLanguage={currentLanguageLabel(
        currentLanguage,
        englishLanguageLabel,
        estonianLanguageLabel
      )}
      t={t}
    />
  )
}
