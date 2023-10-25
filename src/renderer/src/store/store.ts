import { configureStore } from '@reduxjs/toolkit'
import { remindersReducer } from './storeSlices/reminderSlice/remindersSlice'
import { settingsReducer } from './storeSlices/settingsSlice/settingsSlice'

export const store = configureStore({
  reducer: {
    reminders: remindersReducer,
    settings: settingsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
