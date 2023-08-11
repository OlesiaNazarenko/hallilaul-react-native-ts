import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import { SettingsParamList } from "../types"
import { SettingsMainScreen } from "./SettingsMainScreen"
import { LanguageScreen } from "../LanguageScreen/LanguageScreen"
import { ModeScreen } from "../ModeScreen/ModeScreen"

const SettingsStack = createStackNavigator<SettingsParamList>()

export function SettingsScreen() {
  const noScreenHeader = () => null

  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsMainScreen"
        component={SettingsMainScreen}
        options={{ header: noScreenHeader }}
      />
      <SettingsStack.Screen
        name="Language"
        component={LanguageScreen}
        options={{ header: noScreenHeader }}
      />
      <SettingsStack.Screen
        name="Mode"
        component={ModeScreen}
        options={{ header: noScreenHeader }}
      />
    </SettingsStack.Navigator>
  )
}
