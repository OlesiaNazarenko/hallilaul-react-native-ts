/* eslint-disable array-callback-return */
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
      const newThemeName = action.payload

      state.themes.map((item: Theme) => {
        if (item.name === newThemeName) {
          item.default = true
        } else {
          item.default = false
        }
      })
    },
  },
})

export const toggleTheme = createAction<string>("themes/toggleTheme")

export default themeSlice.reducer
