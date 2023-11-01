import { EThemes } from '@renderer/components/organisms/SettingsForm/SettingsForm.types'
import { RootState } from '../../store'

export const selectAllSettings = (state: RootState) => state.settings

export const selectLanguage = (state: RootState) => state.settings.global.locale

export const selectTheme = (state: RootState) =>
  state.settings.global.theme === EThemes.system
    ? window.matchMedia('(prefers-color-scheme: dark)')
      ? EThemes.dark
      : EThemes.light
    : state.settings.global.theme

export const selectDefaultFiltersAndSort = (state: RootState) => state.settings.dashboard

export const selectDefaultAutoOpen = (state: RootState) => state.settings.reminder.autoOpenLink

export const selectDefaultAutoPlay = (state: RootState) => state.settings.reminder.autoPlay
