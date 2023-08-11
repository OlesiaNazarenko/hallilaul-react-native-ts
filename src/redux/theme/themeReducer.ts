/* eslint-disable no-param-reassign */
import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit"
import { DarkModeColorTheme, LightModeColorTheme } from "../../utils/theme"

export type ThemeColor = {
  [key: string]: any
}

export type Theme = {
  name: string
  default: boolean
}

export interface ThemeState {
  themes: Theme[]
  darkMode: ThemeColor
  lightMode: ThemeColor
}

const initialState: ThemeState = {
  themes: [
    { name: "Dark", default: true },
    { name: "Light", default: false },
  ],
  darkMode: DarkModeColorTheme,
  lightMode: LightModeColorTheme,
}

const themeSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<string>) => {
      state.themes.forEach((item) => {
        if (item.name === action.payload) {
          item.default = true
        } else {
          item.default = false
        }
      })
    },
  },
})

type ToggleThemeAction = PayloadAction<string>
export const toggleTheme = createAction<ToggleThemeAction>("theme/toggleTheme")

export default themeSlice.reducer
