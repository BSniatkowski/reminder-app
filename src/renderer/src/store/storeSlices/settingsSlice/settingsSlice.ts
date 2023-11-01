import { createSlice } from '@reduxjs/toolkit'
import {
  ELocales,
  ISettingsState,
  TSetDashboardAction,
  TSetGlobalAction,
  TSetLocaleAction,
  TSetReminderAction
} from './settingsSlice.types'
import { EThemes } from '@renderer/components/organisms/SettingsForm/SettingsForm.types'
import { ESortBy } from '@renderer/components/organisms/RemindersSearchForm/RemindersSearchForm.types'

const initialState: ISettingsState = {
  global: {
    theme: EThemes.system,
    locale: ELocales.en,
    muteApp: false
  },
  dashboard: {
    sortBy: ESortBy.closest,
    archive: true,
    today: true,
    tomorrow: true,
    future: true
  },
  reminder: {
    autoOpenLink: false,
    autoPlay: true
  }
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLocale: (state, action: TSetLocaleAction) => {
      state.global.locale = action.payload
    },
    setGlobal: (state, action: TSetGlobalAction) => {
      state.global = action.payload
    },
    setDashboard: (state, action: TSetDashboardAction) => {
      state.dashboard = action.payload
    },
    setReminder: (state, action: TSetReminderAction) => {
      state.reminder = action.payload
    }
  }
})

export const { setLocale, setGlobal, setDashboard, setReminder } = settingsSlice.actions

export const settingsReducer = settingsSlice.reducer
