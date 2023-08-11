import { Selector, createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { ThemeColor } from "../../utils/theme"
import { Theme } from "./themeReducer"

type ThemePaletteType = ThemeColor
type ThemesType = { name: string; default: boolean }[]

const getThemes = (state: RootState) => state.themes

export const getThemesSelector: Selector<RootState, ThemesType> =
  createSelector(getThemes, (currentState) => currentState.themes)

export const getDefaultThemeSelector: Selector<RootState, Theme> =
  createSelector(
    getThemes,
    (currentState) => currentState.themes.find((item) => item.default === true)!
  )

export const getLightThemePalleteSelector: Selector<
  RootState,
  ThemePaletteType
> = createSelector(getThemes, (currentState) => currentState.lightMode)

export const getDarkThemePalleteSelector: Selector<
  RootState,
  ThemePaletteType
> = createSelector(getThemes, (currentState) => currentState.darkMode)
