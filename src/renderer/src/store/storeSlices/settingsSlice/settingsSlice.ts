import { createSlice } from '@reduxjs/toolkit'
import { ELanguages } from './settingsSlice.types'

export interface ISettingsState {
  locale: ELanguages
}

const initialState: ISettingsState = {
  locale: ELanguages.en
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {}
})

// export const {} = remindersSlice.actions

export const settingsReducer = settingsSlice.reducer
