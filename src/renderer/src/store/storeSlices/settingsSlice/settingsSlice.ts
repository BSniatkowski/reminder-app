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
  theme: EThemes.system,
  locale: ELocales.en,
  muteApp: false,
  sortBy: ESortBy.closest,
  archive: false,
  today: true,
  tomorrow: true,
  future: false,
  autoOpenLink: false,
  autoPlay: true
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLocale: (state, action: TSetLocaleAction) => {
      state.locale = action.payload
    },
    setGlobal: (state, action: TSetGlobalAction) => {
      state.theme = action.payload?.theme
      state.locale = action.payload?.locale
      state.muteApp = action.payload?.muteApp
    },
    setDashboard: (state, action: TSetDashboardAction) => {
      state.sortBy = action.payload?.sortBy
      state.archive = action.payload?.archive
      state.today = action.payload?.today
      state.tomorrow = action.payload?.tomorrow
      state.future = action.payload?.future
    },
    setReminder: (state, action: TSetReminderAction) => {
      state.autoOpenLink = action.payload?.autoOpenLink
      state.autoPlay = action.payload?.autoPlay
    }
  }
})

export const { setLocale, setGlobal, setDashboard, setReminder } = settingsSlice.actions

export const settingsReducer = settingsSlice.reducer
