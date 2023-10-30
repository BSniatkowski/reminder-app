import { EThemes } from '@renderer/components/organisms/SettingsForm/SettingsForm.types'
import { RootState } from '../../store'

export const selectAllSettings = (state: RootState) => state.settings

export const selectLanguage = (state: RootState) => state.settings.locale

export const selectTheme = (state: RootState) =>
  state.settings.theme === EThemes.system
    ? window.matchMedia('(prefers-color-scheme: dark)')
      ? EThemes.dark
      : EThemes.light
    : state.settings.theme
