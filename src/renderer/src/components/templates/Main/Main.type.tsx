import { IReminderItem } from '@globalTypes/reminders.types'
import {
  EReminderSections,
  TOnAddReminderClick,
  TOnDialogAcceptClick,
  TOnDialogCancelClick,
  TOnEditReminderClick,
  TOnPreviewReminderClick,
  TOnRemoveReminderClick
} from '@renderer/components/pages/MainPage.tsx/MainPage.types'

export interface IMainProps {
  reminders: Array<IReminderItem & { section?: EReminderSections }>
  isDialogVisible: boolean
  dialogMainText: string
  onAddReminderClick: TOnAddReminderClick
  onPreviewReminderClick: TOnPreviewReminderClick
  onEditReminderClick: TOnEditReminderClick
  onRemoveReminderClick: TOnRemoveReminderClick
  onDialogCancelClick: TOnDialogCancelClick
  onDialogAcceptClick: TOnDialogAcceptClick
}
