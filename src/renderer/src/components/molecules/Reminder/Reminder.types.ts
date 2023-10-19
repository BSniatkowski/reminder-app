import { IReminderItem } from '@globalTypes/reminders.types'
export interface IReminderProps
  extends Omit<IReminderItem, 'description' | 'link' | 'autoPlay' | 'autoOpenLink'> {
  onClick: () => void
}
