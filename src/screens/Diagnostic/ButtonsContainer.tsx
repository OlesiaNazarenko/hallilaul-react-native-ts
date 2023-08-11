import React, { useContext } from "react"
import { DefaultTFuncReturn } from "i18next"
import styled, { ThemeContext } from "styled-components/native"

import { ButtonSourceSecondary } from "../../components/buttons/buttonSource"
import { ThemeColor } from "../../utils/theme"

const ButtonsContainerStyled = styled.View`
  display: flex;
  align-items: center;
`

interface ButtonsContainerProps {
  data: { label: DefaultTFuncReturn; id: number }[]
  onPressIn: (event: React.MouseEvent<HTMLElement>) => void
}

export const ButtonsContainer = ({
  data,
  onPressIn,
}: ButtonsContainerProps) => {
  const themePalette = useContext<ThemeColor>(ThemeContext)

  return (
    <ButtonsContainerStyled>
      {data.map((button: { label: DefaultTFuncReturn; id: number }) => (
        <ButtonSourceSecondary
          key={button.id}
          onPressIn={onPressIn}
          label={String(button.label)}
          color={themePalette.secondary}
          background={themePalette.contrastMin}
        />
      ))}
    </ButtonsContainerStyled>
  )
}
