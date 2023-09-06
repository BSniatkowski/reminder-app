import {
  TOnAddReminderClick,
  TOnEditReminderClick,
  TOnPreviewReminderClick
} from '@renderer/components/pages/MainPage.tsx/MainPage.types'
import { IReminderItem } from '@renderer/store/storeSlices/reminderSlice/remindersSlice'

export interface IRemindersListProps {
  reminders: Array<IReminderItem>
  onPreviewReminderClick: TOnPreviewReminderClick
  onAddReminderClick: TOnAddReminderClick
  onReminderEditClick: TOnEditReminderClick
}
