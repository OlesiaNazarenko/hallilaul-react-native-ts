import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import {
  AuthConfiguration,
  AuthorizeResult,
  authorize,
} from "react-native-app-auth"
import {
  REACT_APP_SPOTIFY_CLIENT_ID,
  REACT_APP_SPOTIFY_CLIENT_SECRET,
} from "@env"
import { GET_TOCKEN, LOG_IN, REFRESH_TOCKEN } from "./constants"
import { TokenType } from "./selectors"

export const login = createAsyncThunk(LOG_IN, async (_, thunkAPI) => {
  try {
    const loginConfig: AuthConfiguration = {
      clientId: REACT_APP_SPOTIFY_CLIENT_ID ?? "",
      redirectUrl: "org.reactjs.native.example.fresh://auth/callback",
      scopes: ["user-read-private", "user-read-email"],
      serviceConfiguration: {
        authorizationEndpoint: "https://accounts.spotify.com/authorize",
        tokenEndpoint: "https://accounts.spotify.com/api/token",
      },
    }
    const result: AuthorizeResult = await authorize(loginConfig)
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
            redirect_uri: "spotify-ios-quick-start://auth/callback",
            client_id: REACT_APP_SPOTIFY_CLIENT_ID,
            client_secret: REACT_APP_SPOTIFY_CLIENT_SECRET,
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
            client_id: REACT_APP_SPOTIFY_CLIENT_ID,
            client_secret: REACT_APP_SPOTIFY_CLIENT_SECRET,
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
