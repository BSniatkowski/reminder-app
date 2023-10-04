import { IReminderItemBody } from '@globalTypes/reminders.types'

export interface IReminderPreviewProps extends IReminderItemBody {
  onEditReminderClick: () => void
}
