/* eslint-disable no-param-reassign */
import { createAction, createSlice } from "@reduxjs/toolkit"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { persistReducer } from "redux-persist"

import { getToken, login, refreshAccessToken } from "./operations"

export interface AuthStateItem {
  token: string | null
  refreshToken: string | null
  tokenExpirationDate: string | null
  isLoggedIn: boolean
  error: string | null | undefined
  isLoading: boolean
}

export type AuthState = AuthStateItem

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  tokenExpirationDate: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getToken.rejected, (state, action) => {
        state.error = action.error.message
        state.isLoggedIn = false
        state.isLoading = false
      })
      .addCase(getToken.fulfilled, (state, action) => {
        state.token = action.payload.length > 0 ? action.payload : null
        state.error = null
        state.isLoading = false
        state.isLoggedIn = true
      })
      .addCase(getToken.pending, (state) => {
        state.error = null
        state.isLoading = true
        state.isLoggedIn = false
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false
        state.error = action.error.message
        state.isLoading = false
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.accessToken
        state.refreshToken = action.payload.refreshToken
        state.tokenExpirationDate = action.payload.accessTokenExpirationDate
        state.isLoggedIn = true
        state.error = null
        state.isLoading = false
      })
      .addCase(login.pending, (state) => {
        state.error = null
        state.isLoading = true
        state.isLoggedIn = false
      })
      .addCase(refreshAccessToken.rejected, (state, action) => {
        state.isLoggedIn = false
        state.error = action.error.message
        state.isLoading = false
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.token = action.payload.accessToken
        state.refreshToken = action.payload.refreshAccessToken
        state.tokenExpirationDate = action.payload.tokenExpirationDate
        state.isLoggedIn = true
        state.error = null
        state.isLoading = false
      })
      .addCase(refreshAccessToken.pending, (state) => {
        state.error = null
        state.isLoading = true
        state.isLoggedIn = false
      })
  },
  reducers: {
    userLogOut: (state) => {
      state.isLoggedIn = false
    },
  },
})

const authPersistConfig = {
  key: "auth",
  storage: AsyncStorage,
}

const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
)

export const userLogOut = createAction<void>("auth/userLogOut")

export default persistedAuthReducer
