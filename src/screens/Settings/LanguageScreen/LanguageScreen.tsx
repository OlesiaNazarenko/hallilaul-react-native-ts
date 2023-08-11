import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import { useAppDispatch, useAppSelector } from "../../../utils/hooks"
import {
  LanguagesType,
  getLanguagesSelector,
} from "../../../redux/language/selectors"
import { ThemeColor } from "../../../utils/theme"

import { LanguageProps } from "../types"
import { LanguageScreenContent } from "./LanguageScreenContent"

function LanguageScreen({ navigation }: LanguageProps) {
  const languages = useAppSelector<LanguagesType>(getLanguagesSelector)
  const themePalette = useContext<ThemeColor>(ThemeContext)
  const dispatch = useAppDispatch()

  return (
    <LanguageScreenContent
      languages={languages}
      navigation={navigation}
      themePalette={themePalette}
      dispatch={dispatch}
    />
  )
}

export { LanguageScreen }
