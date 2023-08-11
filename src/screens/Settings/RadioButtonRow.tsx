import React from "react"
import styled from "styled-components/native"
import { BodyText } from "../../components/typography/bodyText"
import RadioButtonEnabled from "../../assets/icons/Enabled.svg"
import RadioButtonDisabbled from "../../assets/icons/Disabled.svg"

interface RadioBattonProps {
  enabled: boolean
  color: string
  label: string
}

const SettingRow = styled.View`
  height: 40px;
  padding: 8px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: flex-start;
`

const DisabledIconView = styled.View`
  padding: 0px 3px;
`

const TextView = styled.View`
  margin-left: 10px;
`

function EnabledRadioButtonIcon(color: string) {
  return (
    <RadioButtonEnabled
      stroke={color}
      fill="transparent"
      width={24}
      height={24}
    />
  )
}

function DisabledRadioButtonIcon(color: string) {
  return (
    <DisabledIconView>
      <RadioButtonDisabbled
        stroke={color}
        fill="transparent"
        width={18}
        height={18}
      />
    </DisabledIconView>
  )
}

export function RadioButtonRow({ enabled, color, label }: RadioBattonProps) {
  return (
    <SettingRow>
      {enabled ? EnabledRadioButtonIcon(color) : DisabledRadioButtonIcon(color)}
      <TextView>
        <BodyText text={label} color={color} alignment="left" margin={false} />
      </TextView>
    </SettingRow>
  )
}
