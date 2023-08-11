import React, { useEffect, useState } from "react"
import { I18nextProvider } from "react-i18next"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { ThemeProvider } from "styled-components/native"
import { NavigationStack } from "./src/components/navigationStack"
import { useAppDispatch, useAppSelector } from "./src/utils/hooks"
import {
  getDarkThemePalleteSelector,
  getLightThemePalleteSelector,
  getDefaultThemeSelector,
} from "./src/redux/theme/selectors"
import { store, persistor } from "./src/redux/store"
import { ThemeColor } from "./src/utils/theme"
import i18n from "./src/locales/index"
import {
  LanguageCodeType,
  getCurrentLanguageCodeSelector,
} from "./src/redux/language/selectors"
import {
  TokenType,
  getAccessTokenExpirationDateSelector,
  getTokenSelector,
  getRefresnTokenSelector,
} from "./src/redux/auth/selectors"
import { refreshAccessToken } from "./src/redux/auth/operations"
import { userLogOut } from "./src/redux/auth/authReducer"
import { Theme } from "./src/redux/theme/themeReducer"

const AppContext = () => {
  const token = useAppSelector<TokenType>(getTokenSelector)
  const dispatch = useAppDispatch()
  const themeType = useAppSelector<Theme>(getDefaultThemeSelector)
  const lightTheme = useAppSelector<ThemeColor>(getLightThemePalleteSelector)
  const darkTheme = useAppSelector<ThemeColor>(getDarkThemePalleteSelector)

  const refreshAccessTokenData = useAppSelector<TokenType>(
    getRefresnTokenSelector
  )
  const tokenExpirationDate = useAppSelector<TokenType>(
    getAccessTokenExpirationDateSelector
  )

  const currentLanguageCode = useAppSelector<LanguageCodeType>(
    getCurrentLanguageCodeSelector
  )
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>(() =>
    themeType.name === "Dark" ? darkTheme : lightTheme
  )
  const getCurrentTheme = () =>
    themeType.name === "Dark"
      ? setCurrentTheme(darkTheme)
      : setCurrentTheme(lightTheme)

  useEffect(() => {
    i18n.changeLanguage(currentLanguageCode)
  }, [currentLanguageCode])

  useEffect(() => {
    if (!token) {
      dispatch(userLogOut())
    }
  }, [token, dispatch])

  useEffect(() => {
    getCurrentTheme()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeType])

  useEffect(() => {
    const currentTime = Date.now()
    const refreshThreshold = 60 * 1000
    if (!token && refreshAccessTokenData && tokenExpirationDate) {
      const expirationTimestamp = Number(new Date(tokenExpirationDate))
      if (currentTime >= expirationTimestamp - refreshThreshold) {
        dispatch(refreshAccessToken(refreshAccessTokenData))
      }
    }
  }, [dispatch, refreshAccessTokenData, tokenExpirationDate, token])

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={currentTheme}>
        <SafeAreaProvider>
          <NavigationStack />
        </SafeAreaProvider>
      </ThemeProvider>
    </I18nextProvider>
  )
}

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContext />
      </PersistGate>
    </Provider>
  )
}
