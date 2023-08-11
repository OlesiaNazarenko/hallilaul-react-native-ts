import { StackNavigationProp } from "@react-navigation/stack"

export type SettingsMainScreenProps = {
  navigation: StackNavigationProp<SettingsParamList, "SettingsMainScreen">
}

export type SettingsParamList = {
  SettingsMainScreen: undefined
  Language: undefined
  Mode: undefined
}

export type ModeProps = {
  navigation: StackNavigationProp<SettingsParamList, "Mode">
}

export type LanguageProps = {
  navigation: StackNavigationProp<SettingsParamList, "Language">
}
