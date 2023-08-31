import {
  TOnAddReminderClick,
  TOnEditReminderClick
} from '@renderer/components/pages/MainPage.tsx/MainPage.types'
import { IReminderItem } from '@renderer/store/storeSlices/remindersSlice'

export interface IMainProps {
  reminders: Array<IReminderItem>
  onAddReminderClick: TOnAddReminderClick
  onEditReminderClick: TOnEditReminderClick
}
