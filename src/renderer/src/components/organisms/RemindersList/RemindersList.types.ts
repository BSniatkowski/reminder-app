import {
  TOnAddReminderClick,
  TOnEditReminderClick
} from '@renderer/components/pages/MainPage.tsx/MainPage.types'

export interface IRemindersListProps {
  reminders: Array<{
    id: string
    title: string
  }>
  onAddReminderClick: TOnAddReminderClick
  onReminderEditClick: TOnEditReminderClick
}
