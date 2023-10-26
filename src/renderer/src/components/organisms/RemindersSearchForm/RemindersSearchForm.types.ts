import { EReminderSections } from '@renderer/components/pages/MainPage.tsx/MainPage.types'

type TSectionsKeys = keyof typeof EReminderSections

export interface IRemindersSearchFormValues extends Record<TSectionsKeys, boolean> {
  search: string
  sortBy: string
}

export interface IRemindersSearchFormProps {
  isFormVisible: boolean
  toggleFormVisibility: () => void
  onSubmit: (formValues: IRemindersSearchFormValues) => void
}

export interface IRemindersSearchFormModalProps {
  $isFormVisible: boolean
}
