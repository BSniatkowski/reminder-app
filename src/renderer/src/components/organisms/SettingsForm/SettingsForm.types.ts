import { ELocales } from '@renderer/store/storeSlices/settingsSlice/settingsSlice.types'
import { IRemindersSearchFormValues } from '../RemindersSearchForm/RemindersSearchForm.types'

export enum EThemes {
  system = 'system',
  light = 'light',
  dark = 'dark'
}

export interface IGlobalSettingsFields {
  theme: EThemes
  locale: ELocales
  muteApp: boolean
}

export interface IDashboardSettingsFields extends Omit<IRemindersSearchFormValues, 'search'> {}

export interface IReminderSettingsFields {
  autoOpenLink: boolean
  autoPlay: boolean
}

export enum ESettingsParts {
  global,
  dashboard,
  reminder
}

export type TSettingsFormValues =
  | (IGlobalSettingsFields & { part: ESettingsParts.global })
  | (IDashboardSettingsFields & { part: ESettingsParts.dashboard })
  | (IReminderSettingsFields & { part: ESettingsParts.reminder })

export interface ISettingsFormProps {
  initialSettings: IGlobalSettingsFields & IDashboardSettingsFields & IReminderSettingsFields
  onSubmit: (formValues: TSettingsFormValues) => void
}
