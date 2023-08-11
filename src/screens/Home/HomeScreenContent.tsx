import React from "react"
import { Image, ImageSourcePropType } from "react-native"
import styled from "styled-components/native"
import { TFunction } from "i18next"
import { EmptyObject, ThunkDispatch } from "@reduxjs/toolkit"

import { login } from "../../redux/auth/operations"
import { Container } from "../../components/container"
import { Heading1 } from "../../components/typography/headings"
import { BodySmallText, BodyText } from "../../components/typography/bodyText"
import { ButtonSource } from "../../components/buttons/buttonSource"
import Settings from "../../assets/icons/settings.svg"
import { IconButton } from "../../components/buttons/iconButton"
import { ImageBgContainer } from "../../components/imageBgContainer"
import { ThemeColor } from "../../redux/theme/themeReducer"

import { DiagnosticViewProps } from "./types"

const AppBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const HomeScreenView = styled.View`
  margin-top: 15%;
`

const LogInLinkContainer = styled.View`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`

const LogoImage = styled.View`
  position: absolute;
  width: 64px;
  height: 64px;
  top: 0px;
`

const LogInButton = styled.TouchableOpacity`
  margin-left: 5px;
`

const SettingsButton = styled.View`
  margin-left: auto;
`
interface HomeScreenContentProps {
  currentScreenBackground: ImageSourcePropType
  navigation: DiagnosticViewProps["navigation"]
  themePalette: ThemeColor
  isUserLoggedIn: boolean
  t: TFunction<"translation", undefined, "translation">
  dispatch: ThunkDispatch<EmptyObject, unknown, any>
}

export const HomeScreenContent = ({
  currentScreenBackground,
  navigation,
  themePalette,
  dispatch,
  isUserLoggedIn,
  t,
}: HomeScreenContentProps) => (
  <ImageBgContainer bgImage={currentScreenBackground}>
    <Container>
      <AppBarContainer>
        <LogoImage>
          <Image
            style={{ width: 64, height: 64 }}
            // eslint-disable-next-line global-require
            source={require("../../assets/images/LogoMin.png")}
          />
        </LogoImage>
        <SettingsButton>
          <IconButton
            onPressIn={() => navigation.navigate("Settings")}
            icon={
              <Settings
                width={24}
                height={24}
                stroke={themePalette.text}
                fill="transparent"
              />
            }
          />
        </SettingsButton>
      </AppBarContainer>
      <HomeScreenView>
        <Heading1
          text={t("homeScreenWelcomeHeading")}
          color={themePalette.text}
          alignment="left"
        />
        <BodyText
          text={t("homeScreenWelcomeText")}
          color={themePalette.text}
          alignment="left"
          margin
        />

        <BodyText
          text={t("homeScreenWelcomeText2")}
          color={themePalette.text}
          alignment="left"
          margin
        />
        <ButtonSource
          label={t("homeScreenStartButton")}
          color={themePalette.primary}
          background={themePalette.secondary}
          onPressIn={() => navigation.navigate("Diagnostic")}
          icon
        />
      </HomeScreenView>
      {!isUserLoggedIn && (
        <LogInLinkContainer>
          <LogInButton onPressIn={() => dispatch(login())}>
            <BodySmallText
              text={t("homeScreenLoginButton")}
              color={themePalette.textInteractive}
              alignment=""
              margin={false}
            />
          </LogInButton>
        </LogInLinkContainer>
      )}
    </Container>
  </ImageBgContainer>
)
