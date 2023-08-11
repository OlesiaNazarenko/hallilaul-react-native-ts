import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import { ThemeContext } from "styled-components/native"
import { TFunction } from "i18next"

import { currentScreenBackground } from "@utils/helpers"
import { ThemeColor } from "../../utils/theme"
import { useAppDispatch, useAppSelector } from "../../utils/hooks"
import {
  IsUserLoggedIn,
  getIsLoggedInSelector,
} from "../../redux/auth/selectors"
import { getDefaultThemeSelector } from "../../redux/theme/selectors"
import { Theme } from "../../redux/theme/themeReducer"
import { HomeScreenContent } from "./HomeScreenContent"
import { DiagnosticViewProps } from "./types"

export const HomeScreen = ({ navigation }: DiagnosticViewProps) => {
  const themePalette = useContext<ThemeColor>(ThemeContext)
  const theme = useAppSelector<Theme>(getDefaultThemeSelector)

  const isUserLoggedIn = useAppSelector<IsUserLoggedIn>(getIsLoggedInSelector)
  const dispatch = useAppDispatch()
  const { t }: { t: TFunction } = useTranslation()

  return (
    <HomeScreenContent
      currentScreenBackground={currentScreenBackground(theme)}
      navigation={navigation}
      themePalette={themePalette}
      dispatch={dispatch}
      isUserLoggedIn={isUserLoggedIn}
      t={t}
    />
  )
}
