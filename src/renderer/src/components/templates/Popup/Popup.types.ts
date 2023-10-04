import { IReminderItemBody } from '@globalTypes/reminders.types'

export type TPopupProps = Omit<IReminderItemBody, 'date'> & {
  onPostpone: () => void
  onClose: () => void
}
