import {
  TOnEditReminderClick,
  TOnPreviewReminderClick
} from '@renderer/components/pages/MainPage.tsx/MainPage.types'
import { IReminderItem } from '@renderer/store/storeSlices/reminderSlice/remindersSlice'

export interface IReminderProps extends IReminderItem {
  onPreviewReminderClick: TOnPreviewReminderClick
  onReminderEditClick: TOnEditReminderClick
}
