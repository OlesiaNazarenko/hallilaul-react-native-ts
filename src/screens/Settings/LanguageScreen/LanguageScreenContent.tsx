import React from "react"
import { t } from "i18next"
import { TouchableOpacity } from "react-native"
import { ThunkDispatch, EmptyObject } from "@reduxjs/toolkit"

import { LinearGradientBg } from "../../../components/linearGradientBg"
import { Container } from "../../../components/container"
import { AppBar } from "../../../components/appBar"
import {
  LanguageStateItem,
  toggleLanguage,
} from "../../../redux/language/languageReducer"
import { RadioButtonRow } from "../RadioButtonRow"
import BackArrow from "../../../assets/icons/Back.svg"
import { ThemeColor } from "../../../utils/theme"
import { LanguagesType } from "../../../redux/language/selectors"
import { LanguageProps } from "../types"

interface LanguageScreenContentProps {
  languages: LanguagesType
  navigation: LanguageProps["navigation"]
  themePalette: ThemeColor
  dispatch: ThunkDispatch<EmptyObject, unknown, any>
}

export function LanguageScreenContent({
  navigation,
  themePalette,
  dispatch,
  languages,
}: LanguageScreenContentProps) {
  return (
    <LinearGradientBg>
      <Container>
        <AppBar
          navigation={navigation}
          hasHeaderRight={false}
          headerRightScreen=""
          hasHeaderLeft
          leftButtonIcon={
            <BackArrow height={26} width={26} stroke={themePalette.text} />
          }
          appBarLabelText={t("settingsScreenChooseLanguageLabel")}
          appBarLabelColor={themePalette.text}
          appBarLabelAlignment="left"
        />

        {languages.map((item: LanguageStateItem) => (
          <TouchableOpacity
            key={item.languageCode}
            onPress={() => dispatch(toggleLanguage(item))}
          >
            <RadioButtonRow
              enabled={item.enabled}
              color={themePalette.text}
              label={
                item.language === "English"
                  ? t("settingsScreenEnglishLanguageLabel")
                  : t("settingsScreenEstonianLanguageLabel")
              }
            />
          </TouchableOpacity>
        ))}
      </Container>
    </LinearGradientBg>
  )
}
