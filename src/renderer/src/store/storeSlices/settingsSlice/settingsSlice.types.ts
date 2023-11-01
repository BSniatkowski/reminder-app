import { PayloadAction } from '@reduxjs/toolkit'
import { ESortBy } from '@renderer/components/organisms/RemindersSearchForm/RemindersSearchForm.types'
import { EThemes } from '@renderer/components/organisms/SettingsForm/SettingsForm.types'
import { EReminderSections } from '@renderer/components/pages/MainPage/MainPage.types'

export enum ELocales {
  en = 'en',
  pl = 'pl'
}

export interface IGlobalSettings {
  theme: EThemes
  locale: ELocales
  muteApp: boolean
}

export interface IDashboardSettings extends Record<EReminderSections, boolean> {
  sortBy: ESortBy
}

export interface IReminderSettings {
  autoOpenLink: boolean
  autoPlay: boolean
}

export interface ISettingsState {
  global: IGlobalSettings
  dashboard: IDashboardSettings
  reminder: IReminderSettings
}

export type TSetLocaleAction = PayloadAction<ELocales>

export type TSetGlobalAction = PayloadAction<IGlobalSettings>

export type TSetDashboardAction = PayloadAction<IDashboardSettings>

export type TSetReminderAction = PayloadAction<IReminderSettings>
