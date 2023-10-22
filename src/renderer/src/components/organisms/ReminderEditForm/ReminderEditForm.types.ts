import { IReminderItem } from '@globalTypes/reminders.types'

export interface IReminderEditFormProps {
  isFormVisible: boolean
  reminder?: IReminderItem
  onDelete: () => void
  onSubmit: (formValues: IReminderItem) => void
}

export interface IReminderEditFormModalProps {
  $isFormVisible: boolean
}
