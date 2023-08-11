import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { GET_SONG } from "./constants"

export const getSong = createAsyncThunk(
  GET_SONG,
  async (accessToken: string, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/tracks/4crU4KMHG15M2PaUOEK4Dv`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )

      const song = response.data
      return song
    } catch (error) {
      console.error("Error getting song:", error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)
