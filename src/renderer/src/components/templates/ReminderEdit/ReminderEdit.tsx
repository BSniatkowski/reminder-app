import { IReminderEditProps } from './Reminder.types'

export const ReminderEdit: React.FC<IReminderEditProps> = ({ reminder }) => {
  return <>{reminder.toString()}</>
}
