import { IReminderItemBody } from '@globalTypes/reminders.types'

export type TPopupProps = Omit<IReminderItemBody, 'date' | 'autoOpenLink'> & {
  videoId?: string
  isPostponeDialogVisible: boolean
  postponeDialogMainText: string
  onDone: () => void
  onPostpone: () => void
  onPostponeDialogCancel: () => void
  onPostponeDialogAccept: () => void
  isRemoveReminderDialogVisible: boolean
  removeDialogMainText: string
  onRemove: () => void
  onRemoveDialogCancel: () => void
  onRemoveDialogAccept: () => void
}
