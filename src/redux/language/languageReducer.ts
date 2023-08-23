/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */

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
    toggleLanguage: (state, action: { payload: LanguageStateItem }) => {
      state.map((item: LanguageStateItem) => {
        const newLanguage = action.payload.languageCode

        if (item.languageCode === newLanguage) {
          item.enabled = true
        } else {
          item.enabled = false
        }
      })
    },
  },
})

export const toggleLanguage = createAction<LanguageStateItem>(
  "language/toggleLanguage"
)

export default languageSlice.reducer
