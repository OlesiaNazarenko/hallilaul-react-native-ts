/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"
import { getSong } from "./operations"

export interface SongsState {
  song: object | null
  isLoading: boolean
  error: string | null | undefined
}

const initialState: SongsState = {
  song: null,
  isLoading: false,
  error: null,
}

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSong.rejected, (state, action) => {
        state.error = action.error.message
        state.isLoading = false
      })
      .addCase(getSong.fulfilled, (state, action) => {
        state.song = action.payload
        state.error = null
        state.isLoading = false
      })
      .addCase(getSong.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
  },
})

export default songSlice.reducer
