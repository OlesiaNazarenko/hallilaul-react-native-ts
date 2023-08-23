import React from "react"
import { t } from "i18next"
import { TouchableOpacity } from "react-native"
import { EmptyObject, ThunkDispatch } from "@reduxjs/toolkit"
import { LinearGradientBg } from "../../../components/linearGradientBg"
import { AppBar } from "../../../components/appBar"
import { Container } from "../../../components/container"
import { Theme, toggleTheme } from "../../../redux/theme/themeReducer"
import { RadioButtonRow } from "../RadioButtonRow"
import BackArrow from "../../../assets/icons/Back.svg"
import { ThemeColor } from "../../../utils/theme"
import { ModeProps } from "../types"

interface ModeScreenContentProps {
  modes: Theme[]
  navigation: ModeProps["navigation"]
  themePalette: ThemeColor
  dispatch: ThunkDispatch<EmptyObject, unknown, any>
}

export function ModeScreenContent({
  modes,
  navigation,
  themePalette,
  dispatch,
}: ModeScreenContentProps) {
  return (
    <LinearGradientBg>
      <Container>
        <AppBar
          navigation={navigation}
          hasHeaderRight={false}
          headerRightScreen=""
          hasHeaderLeft
          leftButtonIcon={
            <BackArrow height={26} width={26} stroke={themePalette.text} />
          }
          appBarLabelText={t("settingsScreenChooseModeLabel")}
          appBarLabelColor={themePalette.text}
          appBarLabelAlignment="left"
        />

        {modes.map(
          (item: { name: string; default: boolean }, index: number) => (
            <TouchableOpacity
              key={item.name}
              onPress={() => {
                const newThemeName: string = index === 0 ? "Dark" : "Light"
                return dispatch(toggleTheme(newThemeName))
              }}
            >
              <RadioButtonRow
                enabled={item.default}
                color={themePalette.text}
                label={item.name}
              />
            </TouchableOpacity>
          )
        )}
      </Container>
    </LinearGradientBg>
  )
}
