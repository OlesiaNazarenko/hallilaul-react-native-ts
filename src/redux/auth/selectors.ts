import { createSelector, Selector } from "@reduxjs/toolkit"
import type { RootState } from "../store"

export type TokenType = string | null
export type IsUserLoggedIn = boolean
export type TokenExpirationDate = string | null
type AuthState = {
  token: string | null
  refreshToken: string | null
  tokenExpirationDate: string | null
  isLoggedIn: boolean
  error: string | null | undefined
  isLoading: boolean
}

const getAuthState: Selector<RootState, AuthState> = (state) => state.auth

export const getTokenSelector: Selector<RootState, TokenType> = createSelector(
  getAuthState,
  (currentState) => currentState.token
)

export const getRefresnTokenSelector: Selector<RootState, TokenType> =
  createSelector(getAuthState, (currentState) => currentState.refreshToken)

export const getIsLoggedInSelector: Selector<RootState, IsUserLoggedIn> =
  createSelector(getAuthState, (currentState) => currentState.isLoggedIn)

export const getAccessTokenExpirationDateSelector: Selector<
  RootState,
  TokenExpirationDate
> = createSelector(
  getAuthState,
  (currentState) => currentState.tokenExpirationDate
)
