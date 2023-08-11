import React from "react"
import LinearGradient from "react-native-linear-gradient"
import { ImageSourcePropType, View } from "react-native"
import styled from "styled-components/native"
import { EmptyObject, ThunkDispatch } from "@reduxjs/toolkit"
import { TFunction } from "i18next"
import { ImageBgContainer } from "../../../components/imageBgContainer"
import { AppBar } from "../../../components/appBar"
import SettingsIcon from "../../../assets/icons/settings.svg"
import CloseIcon from "../../../assets/icons/Close.svg"
import { Container } from "../../../components/container"
import { SpotifyPlayer } from "../SpotifyPlayer/SpotifyPlayer"
import { ButtonSource } from "../../../components/buttons/buttonSource"
import { BodyText } from "../../../components/typography/bodyText"
import { login } from "../../../redux/auth/operations"
import { ThemeColor } from "../../../utils/theme"
import { SongType } from "../../../redux/songs/selectors"
import { LullabyViewProps } from "./types"

interface LullabyContentProps {
  darkTheme: boolean
  navigation: LullabyViewProps["navigation"]
  themePalette: ThemeColor
  isUserLoggedIn: boolean
  song: SongType
  t: TFunction<"translation", undefined, "translation">
  dispatch: ThunkDispatch<EmptyObject, unknown, any>
  backgroundImage: ImageSourcePropType
}

const PlayerContainer = styled.View`
  position: relative;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  bottom: 20px;
  padding: 20px 0;
`

export function LullabyContent({
  darkTheme,
  navigation,
  themePalette,
  isUserLoggedIn,
  song,
  t,
  dispatch,
  backgroundImage,
}: LullabyContentProps) {
  return (
    <ImageBgContainer bgImage={backgroundImage}>
      <LinearGradient
        style={{ flex: 1 }}
        colors={
          darkTheme
            ? [
                "#000000",
                "rgba(0, 0, 0, 0)",
                "rgba(0, 0, 0, 0)",
                "rgba(0, 0, 0, 0.7)",
                "#000000",
              ]
            : [
                "rgba(249, 249, 248, 0.8)",
                "rgba(255,255,255,0.4)",
                "rgba(0,0,0,0.2)",
                "rgba(0, 0, 0, 0.8)",
              ]
        }
      >
        <Container>
          <AppBar
            navigation={navigation}
            hasHeaderRight
            headerRightScreen="Settings"
            rightButtonIcon={
              <SettingsIcon
                width={24}
                height={24}
                stroke={themePalette.text}
                fill="transparent"
              />
            }
            hasHeaderLeft
            leftButtonIcon={
              <CloseIcon
                height={26}
                width={26}
                stroke={themePalette.text}
                fill="transparent"
              />
            }
            headerLeftScreen="Home"
            appBarLabelText={t("lullabyAppBarLabel")}
            appBarLabelColor={themePalette.text}
            appBarLabelAlignment="left"
          />

          <PlayerContainer>
            {!isUserLoggedIn ? (
              <View>
                <BodyText
                  text={t("lullabyScreenNotLoggedInMessage")}
                  color={themePalette.text}
                  alignment="center"
                  margin={false}
                />
                <ButtonSource
                  label={t("lullabyScreenLogInButton")}
                  color={themePalette.primary}
                  background={themePalette.secondary}
                  onPressIn={() => dispatch(login())}
                  icon
                />
              </View>
            ) : (
              song && (
                <SpotifyPlayer
                  song={song}
                  visualBtnlLabel={t("lullabyScreenVisualButton")}
                  repeatBtnLabel={t("lullabyScreenRepeatButton")}
                />
              )
            )}
          </PlayerContainer>
        </Container>
      </LinearGradient>
    </ImageBgContainer>
  )
}
