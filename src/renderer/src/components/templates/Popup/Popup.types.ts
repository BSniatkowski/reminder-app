import { IReminderItemBody } from '@globalTypes/reminders.types'

export type TPopupProps = Omit<IReminderItemBody, 'date'> & {
  isPostponeDialogVisible: boolean
  postponeDialogMainText: string
  onPostpone: () => void
  onPostponeDialogCancel: () => void
  onPostponeDialogAccept: () => void
  isRemoveReminderDialogVisible: boolean
  removeDialogMainText: string
  onRemove: () => void
  onRemoveDialogCancel: () => void
  onRemoveDialogAccept: () => void
}
