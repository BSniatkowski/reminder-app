import { IReminderItem } from '@globalTypes/reminders.types'
import {
  TOnAddReminderClick,
  TOnEditReminderClick,
  TOnPreviewReminderClick,
  TOnRemoveReminderClick
} from '@renderer/components/pages/MainPage.tsx/MainPage.types'

export interface IMainProps {
  reminders: Array<IReminderItem>
  onAddReminderClick: TOnAddReminderClick
  onPreviewReminderClick: TOnPreviewReminderClick
  onEditReminderClick: TOnEditReminderClick
  onRemoveReminderClick: TOnRemoveReminderClick
}
