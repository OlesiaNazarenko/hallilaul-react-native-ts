import React, { useContext, useEffect } from "react"
import { TFunction } from "i18next"
import { useTranslation } from "react-i18next"
import { ThemeContext } from "styled-components"

import { currentScreenBackground } from "@utils/helpers"
import { useAppDispatch, useAppSelector } from "../../../utils/hooks"

import {
  IsUserLoggedIn,
  TokenType,
  getIsLoggedInSelector,
  getRefresnTokenSelector,
  getTokenSelector,
} from "../../../redux/auth/selectors"
import {
  SongError,
  SongType,
  getSongErrorSelector,
  getSongSelector,
} from "../../../redux/songs/selectors"
import { refreshAccessToken } from "../../../redux/auth/operations"
import { getSong } from "../../../redux/songs/operations"
import { ThemeColor } from "../../../utils/theme"
import { getDefaultThemeSelector } from "../../../redux/theme/selectors"
import { LullabyViewProps } from "./types"
import { Theme } from "../../../redux/theme/themeReducer"
import { LullabyContent } from "./LullabyContent"

export function LullabyScreen({ navigation }: LullabyViewProps) {
  const { t }: { t: TFunction } = useTranslation()
  const themePalette = useContext<ThemeColor>(ThemeContext)
  const token = useAppSelector<TokenType>(getTokenSelector)
  const songError = useAppSelector<SongError>(getSongErrorSelector)
  const song = useAppSelector<SongType>(getSongSelector)
  const dispatch = useAppDispatch()
  const refreshAccessTokenData = useAppSelector<TokenType>(
    getRefresnTokenSelector
  )
  const theme = useAppSelector<Theme>(getDefaultThemeSelector)

  const isUserLoggedIn = useAppSelector<IsUserLoggedIn>(getIsLoggedInSelector)

  useEffect(() => {
    if (songError && refreshAccessTokenData) {
      dispatch(refreshAccessToken(refreshAccessTokenData))
    }
  }, [dispatch, songError, refreshAccessTokenData])

  useEffect(() => {
    if (token) {
      dispatch(getSong(token))
    }
  }, [token, dispatch])

  return (
    <LullabyContent
      darkTheme={false}
      navigation={navigation}
      themePalette={themePalette}
      isUserLoggedIn={isUserLoggedIn}
      song={song}
      t={t}
      dispatch={dispatch}
      backgroundImage={currentScreenBackground(theme)}
    />
  )
}
