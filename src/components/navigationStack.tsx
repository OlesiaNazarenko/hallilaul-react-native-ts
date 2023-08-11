import React, { useContext } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

import { ThemeContext } from "styled-components"
import { HomeScreen } from "../screens/Home/HomeScreen"
import { SettingsScreen } from "../screens/Settings/SettingsScreen/SettingsScreen"

import { DiagnosticScreen } from "../screens/Diagnostic/DiagnosticScreen"
import { ContactsScreen } from "../screens/Contacts/ContactsScreen"
import BackArrow from "../assets/icons/Back.svg"

import { IconButton } from "./buttons/iconButton"
import { LullabyScreen } from "../screens/Lullaby/LullabyMainScreen/Lullaby"
import { ThemeColor } from "../utils/theme"
import { MainParamList } from "./types"

export const Stack = createStackNavigator<MainParamList>()

export function NavigationStack() {
  const themePalette = useContext<ThemeColor>(ThemeContext)

  const backButton = (navigation: { goBack: () => any }) => (
    <IconButton
      onPressIn={() => navigation.goBack()}
      icon={<BackArrow height={26} width={26} stroke={themePalette.text} />}
    />
  )
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={() => ({
            header: () => null,
          })}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Diagnostic"
          options={() => ({
            header: () => null,
          })}
          component={DiagnosticScreen}
        />
        <Stack.Screen
          name="Contacts"
          options={({ navigation }) => ({
            headerTitle: () => null,
            headerStyle: {
              backgroundColor: themePalette.background,
            },
            headerLeft: () => backButton(navigation),
            headerStatusBarHeight: 0,
            headerShadowVisible: false,
          })}
          component={ContactsScreen}
        />
        <Stack.Screen
          name="Settings"
          options={() => ({
            header: () => null,
          })}
          component={SettingsScreen}
        />
        <Stack.Screen
          name="Lullaby"
          options={() => ({
            header: () => null,
          })}
          component={LullabyScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
