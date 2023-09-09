import {
  TOnAddReminderClick,
  TOnEditReminderClick,
  TOnPreviewReminderClick
} from '@renderer/components/pages/MainPage.tsx/MainPage.types'
import { IReminderItem } from '@renderer/store/storeSlices/reminderSlice/remindersSlice'

export interface IMainProps {
  reminders: Array<IReminderItem>
  onAddReminderClick: TOnAddReminderClick
  onPreviewReminderClick: TOnPreviewReminderClick
  onEditReminderClick: TOnEditReminderClick
}
