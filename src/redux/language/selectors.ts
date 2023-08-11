import { Selector, createSelector } from "@reduxjs/toolkit"
import { LanguageStateItem } from "./languageReducer"
import type { RootState } from "../store"

export type LanguagesType = LanguageStateItem[]
export type LanguageNameType = string | undefined
export type LanguageCodeType = string | undefined

export const getLanguagesSelector: Selector<RootState, LanguagesType> = (
  state
) => state.languages

export const getCurrentLanguageSelector: Selector<RootState, LanguageNameType> =
  createSelector(
    getLanguagesSelector,
    (languages: LanguagesType) =>
      languages.find((item: { enabled: boolean }) => item.enabled === true)
        ?.language
  )

export const getCurrentLanguageCodeSelector: Selector<
  RootState,
  LanguageCodeType
> = createSelector(
  getLanguagesSelector,
  (languages: LanguagesType) =>
    languages.find((item: { enabled: boolean }) => item.enabled === true)
      ?.languageCode
)
