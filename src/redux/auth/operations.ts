import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import Config from "react-native-config"
import {
  AuthConfiguration,
  AuthorizeResult,
  authorize,
} from "react-native-app-auth"
import { GET_TOCKEN, LOG_IN, REFRESH_TOCKEN } from "./constants"
import { TokenType } from "./selectors"

console.log(Config)
export const login = createAsyncThunk(LOG_IN, async (_, thunkAPI) => {
  try {
    const loginConfig: AuthConfiguration = {
      clientId: Config.SPOTIFY_CLIENT_ID ?? "",
      redirectUrl: "org.reactjs.native.example.fresh://auth/callback",
      scopes: ["user-read-private", "user-read-email"],
      serviceConfiguration: {
        authorizationEndpoint: "https://accounts.spotify.com/authorize",
        tokenEndpoint: "https://accounts.spotify.com/api/token",
      },
    }
    const result: AuthorizeResult = await authorize(loginConfig)
    console.log(loginConfig)
    return result
  } catch (error) {
    console.error("Spotify Login Error:", error)
    return thunkAPI.rejectWithValue(error)
  }
})

export const getToken = createAsyncThunk(
  GET_TOCKEN,
  async (authorizationCode, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        null,
        {
          params: {
            grant_type: "authorization_code",
            code: authorizationCode,
            redirect_uri: "org.reactjs.native.example.fresh://auth/callback",
            client_id: Config.SPOTIFY_CLIENT_ID,
            client_secret: Config.SPOTIFY_CLIENT_SECRET,
          },
        }
      )

      const { access_token: accessToken } = response.data
      return accessToken
    } catch (error) {
      console.error("Error getting token:", error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const refreshAccessToken = createAsyncThunk(
  REFRESH_TOCKEN,
  async (refreshToken: TokenType, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        null,
        {
          params: {
            grant_type: "refresh_token",
            refresh_token: refreshToken,
            client_id: Config.SPOTIFY_CLIENT_ID,
            client_secret: Config.SPOTIFY_CLIENT_SECRET,
          },
        }
      )
      return response.data
    } catch (error) {
      console.error("Error refreshing token:", error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)
