import {
  TOnAddReminderClick,
  TOnEditReminderClick
} from '@renderer/components/pages/MainPage.tsx/MainPage.types'
import { IReminderItem } from '@renderer/store/storeSlices/reminderSlice/remindersSlice'

export interface IRemindersListProps {
  reminders: Array<IReminderItem>
  onAddReminderClick: TOnAddReminderClick
  onReminderEditClick: TOnEditReminderClick
}
