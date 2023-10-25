import { IReminderItem } from '@globalTypes/reminders.types'

export interface IReminderEditFormProps {
  isFormVisible: boolean
  hideForm: () => void
  reminder?: IReminderItem
  onDelete: false | (() => void)
  onSubmit: (formValues: IReminderItem) => void
}

export interface IReminderEditFormModalProps {
  $isFormVisible: boolean
}
