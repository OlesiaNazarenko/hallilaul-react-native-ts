import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PERSIST,
  PAUSE,
  PURGE,
  REGISTER,
} from "redux-persist"
import AsyncStorage from "@react-native-async-storage/async-storage"
import themeReducer from "./theme/themeReducer"
import languageReducer from "./language/languageReducer"
import songsReducer from "./songs/songReducer"
import authReducer from "./auth/authReducer"

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authReducer,
    themes: themeReducer,
    languages: languageReducer,
    songs: songsReducer,
  })
)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
