import React, { useContext } from "react"
import { TouchableOpacity } from "react-native"
import styled, { ThemeContext } from "styled-components/native"

import { BodySmallText, BodyText } from "../../components/typography/bodyText"
import ForwardArrow from "../../assets/icons/chevron-right.svg"
import { ThemeColor } from "../../utils/theme"
import { SettingsMainScreenProps } from "./types"

interface SettingRowProps {
  navigation: SettingsMainScreenProps
  targetPage: "SettingsMainScreen" | "Language" | "Mode"
  settingsRowLabel: string
  icon: React.ReactNode
  currentValue: string
}

const SettingsRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 48px;
  margin-bottom: 20px;
`

const SettingsSubRowView = styled.View`
  display: flex;
  flex-direction: row;
`

const TextContainer = styled.View`
  margin-left: 20px;
`

export function SettingsRowView({
  navigation,
  targetPage,
  icon,
  settingsRowLabel,
  currentValue,
}: SettingRowProps) {
  const themePalette = useContext<ThemeColor>(ThemeContext)

  return (
    <TouchableOpacity
      onPress={() => navigation.navigation.navigate(targetPage)}
    >
      <SettingsRow>
        <SettingsSubRowView>
          {icon}
          <TextContainer>
            <BodyText
              text={settingsRowLabel}
              color={themePalette.text}
              alignment="left"
              margin={false}
            />
            <BodySmallText
              text={currentValue}
              color={themePalette.textSecondary}
              alignment="left"
              margin={false}
            />
          </TextContainer>
        </SettingsSubRowView>
        <ForwardArrow stroke={themePalette.text} width={24} height={24} />
      </SettingsRow>
    </TouchableOpacity>
  )
}
