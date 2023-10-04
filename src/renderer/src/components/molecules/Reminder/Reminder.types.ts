import { IReminderItem } from '@globalTypes/reminders.types'
import {
  TOnEditReminderClick,
  TOnPreviewReminderClick,
  TOnRemoveReminderClick
} from '@renderer/components/pages/MainPage.tsx/MainPage.types'

export interface IReminderProps extends IReminderItem {
  onPreviewReminderClick: TOnPreviewReminderClick
  onEditReminderClick: TOnEditReminderClick
  onRemoveReminderClick: TOnRemoveReminderClick
}
