import { Selector, createSelector } from "@reduxjs/toolkit"
import type { RootState } from "../store"

export type SongType = object | null
export type SongError = string | null | undefined

const getSongState = (state: RootState) => state.songs

export const getSongSelector: Selector<RootState, SongType> = createSelector(
  getSongState,
  (currentState) => currentState.song
)

export const getSongErrorSelector: Selector<RootState, SongError> =
  createSelector(getSongState, (currentState) => currentState.error)
