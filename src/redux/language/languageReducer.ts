/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { createAction, createSlice } from "@reduxjs/toolkit"

export type LanguageState = LanguageStateItem[]

export interface LanguageStateItem {
  language: string
  languageCode: string
  enabled: boolean
}

const initialState: LanguageState = [
  {
    language: "English",
    languageCode: "en",
    enabled: true,
  },
  {
    language: "Eesti keelt",
    languageCode: "ee",
    enabled: false,
  },
]
const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.map((item: LanguageStateItem) => (item.enabled = !item.enabled))
    },
  },
})

export const toggleLanguage = createAction<void>("language/toggleLanguage")

export default languageSlice.reducer
