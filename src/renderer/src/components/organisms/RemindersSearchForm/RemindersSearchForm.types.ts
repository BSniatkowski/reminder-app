import { EReminderSections } from '@renderer/components/pages/MainPage/MainPage.types'

export type TSectionsKeys = keyof typeof EReminderSections

export enum ESortBy {
  alphabetically = 'alphabetically',
  closest = 'closest',
  furthest = 'furthest'
}

export interface IRemindersSearchFormValues extends Record<TSectionsKeys, boolean> {
  search: string
  sortBy: ESortBy
}

export interface IRemindersSearchFormProps {
  isFormVisible: boolean
  toggleFormVisibility: () => void
  onSubmit: (formValues: IRemindersSearchFormValues) => void
}

export interface IRemindersSearchFormModalProps {
  $isFormVisible: boolean
}
