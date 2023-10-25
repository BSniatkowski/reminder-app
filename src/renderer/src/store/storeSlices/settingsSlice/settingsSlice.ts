import { createSlice } from '@reduxjs/toolkit'
import { ELocales, ISettingsState, TSetLocaleAction } from './settingsSlice.types'

const initialState: ISettingsState = {
  locale: ELocales.en
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLocale: (state, action: TSetLocaleAction) => {
      state.locale = action.payload
    }
  }
})

export const { setLocale } = settingsSlice.actions

export const settingsReducer = settingsSlice.reducer
