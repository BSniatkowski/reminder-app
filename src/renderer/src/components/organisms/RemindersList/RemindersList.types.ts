import { IReminderItem } from '@globalTypes/reminders.types'
import {
  TOnAddReminderClick,
  TOnEditReminderClick,
  TOnPreviewReminderClick
} from '@renderer/components/pages/MainPage.tsx/MainPage.types'

export interface IRemindersListProps {
  reminders: Array<IReminderItem>
  onPreviewReminderClick: TOnPreviewReminderClick
  onAddReminderClick: TOnAddReminderClick
  onEditReminderClick: TOnEditReminderClick
}
