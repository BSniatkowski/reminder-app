import { IReminderItemBody } from '@globalTypes/reminders.types'

export interface IReminderPreviewProps extends IReminderItemBody {
  onEditReminderClick: () => void
  onRemoveReminderClick: () => void
  isDialogVisible: boolean
  dialogMainText: string
  onDialogCancelClick: () => void
  onDialogAcceptClick: () => void
}
