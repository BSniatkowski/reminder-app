import { PayloadAction } from '@reduxjs/toolkit'
import { ESortBy } from '@renderer/components/organisms/RemindersSearchForm/RemindersSearchForm.types'
import { EThemes } from '@renderer/components/organisms/SettingsForm/SettingsForm.types'

export enum ELocales {
  en = 'en',
  pl = 'pl'
}

export interface IGeneralSettings {
  theme: EThemes
  locale: ELocales
  muteApp: boolean
}

export interface IDashboardSettings {
  sortBy: ESortBy
  archive: boolean
  today: boolean
  tomorrow: boolean
  future: boolean
}

export interface IReminderSettings {
  autoOpenLink: boolean
  autoPlay: boolean
}

export interface ISettingsState extends IGeneralSettings, IDashboardSettings, IReminderSettings {}

export type TSetLocaleAction = PayloadAction<ELocales>

export type TSetGlobalAction = PayloadAction<IGeneralSettings>

export type TSetDashboardAction = PayloadAction<IDashboardSettings>

export type TSetReminderAction = PayloadAction<IReminderSettings>
