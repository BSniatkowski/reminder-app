import { PayloadAction } from '@reduxjs/toolkit'

export enum ELocales {
  en = 'en',
  pl = 'pl'
}

export interface ISettingsState {
  locale: ELocales
}

export type TSetLocaleAction = PayloadAction<ELocales>
