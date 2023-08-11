import React from "react"
import styled from "styled-components/native"
import { IconButton } from "./buttons/iconButton"
import { Heading3 } from "./typography/headings"

interface AppBarProps {
  navigation: any
  hasHeaderRight: boolean
  headerRightScreen?: string | null
  hasHeaderLeft: boolean
  headerLeftScreen?: string | null
  leftButtonIcon?: React.ReactNode | null
  rightButtonIcon?: React.ReactNode | null
  appBarLabelText?: string | undefined | null
  appBarLabelColor?: string | null
  appBarLabelAlignment?: string | null
}

interface StyledProps {
  alignment: Function
}

const AppBarStyled = styled.View<StyledProps>`
  display: flex;
  justify-content: ${(props: StyledProps) => props.alignment()};
  flex-direction: row;
  margin-bottom: 35px;
`
const ScreenTitle = styled.Text`
  margin-left: 20px;
`
const ScreenTitleView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const AppBar = ({
  hasHeaderLeft,
  hasHeaderRight,
  leftButtonIcon,
  rightButtonIcon,
  headerLeftScreen,
  headerRightScreen,
  appBarLabelText,
  appBarLabelColor,
  appBarLabelAlignment,
  navigation,
}: AppBarProps) => {
  const alignmentValue = () => {
    if (hasHeaderLeft && !hasHeaderRight) {
      return "flex-start"
    }
    if (!hasHeaderLeft && hasHeaderRight) {
      return "flex-end"
    }
    if (hasHeaderLeft && hasHeaderRight) {
      return "space-between"
    }
    return "flex-start"
  }

  return (
    <AppBarStyled alignment={alignmentValue}>
      {hasHeaderLeft && (
        <ScreenTitleView>
          <IconButton
            icon={leftButtonIcon}
            onPressIn={() =>
              headerLeftScreen
                ? navigation.navigate(headerLeftScreen)
                : navigation.goBack()
            }
          />
          {appBarLabelText && (
            <ScreenTitle>
              <Heading3
                text={appBarLabelText}
                color={appBarLabelColor || ""}
                alignment={appBarLabelAlignment || ""}
              />
            </ScreenTitle>
          )}
        </ScreenTitleView>
      )}
      {hasHeaderRight && (
        <IconButton
          icon={rightButtonIcon}
          onPressIn={() => navigation.navigate(headerRightScreen)}
        />
      )}
    </AppBarStyled>
  )
}

AppBar.defaultProps = {
  rightButtonIcon: null,
  headerRightScreen: null,
  headerLeftScreen: null,
  leftButtonIcon: null,
  appBarLabelText: null,
  appBarLabelColor: null,
  appBarLabelAlignment: null,
}
