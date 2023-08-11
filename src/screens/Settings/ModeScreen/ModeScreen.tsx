import React, { useContext } from "react"
import { ThemeContext } from "styled-components/native"

import { ModeScreenContent } from "./ModeScreenContent"

import { ThemeColor } from "../../../utils/theme"
import { useAppDispatch, useAppSelector } from "../../../utils/hooks"
import { ModeProps } from "../types"
import { getThemesSelector } from "../../../redux/theme/selectors"
import { Theme } from "../../../redux/theme/themeReducer"

function ModeScreen({ navigation }: ModeProps) {
  const themePalette = useContext<ThemeColor>(ThemeContext)
  const dispatch = useAppDispatch()
  const modes = useAppSelector<Theme[]>(getThemesSelector)

  return (
    <ModeScreenContent
      modes={modes}
      navigation={navigation}
      themePalette={themePalette}
      dispatch={dispatch}
    />
  )
}

export { ModeScreen }
