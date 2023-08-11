import React from "react"
import LinearGradient from "react-native-linear-gradient"
import { useAppSelector } from "../utils/hooks"
import { getDefaultThemeSelector } from "../redux/theme/selectors"
import { Theme } from "../redux/theme/themeReducer"

export const LinearGradientBg = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const theme = useAppSelector<Theme>(getDefaultThemeSelector)

  const backgroundGradient: string[] =
    theme.name === "Dark" ? ["#4F2864", "#13031B"] : ["#FFFFFF", "#F0E9F3"]

  return (
    <LinearGradient colors={backgroundGradient} style={{ flex: 1 }}>
      {children}
    </LinearGradient>
  )
}
