import { RootState } from '../../store'

export const selectAllSettings = (state: RootState) => state.settings

export const selectLanguage = (state: RootState) => state.settings.locale
