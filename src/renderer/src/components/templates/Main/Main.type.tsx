import { IReminderProps } from '@renderer/components/molecules/Reminder/Reminder.types'

export interface IMainProps {
  reminders: Array<Omit<IReminderProps, 'onClick'>>
  onReminderClick: (id: string) => void
  onAddReminderClick: () => void
}
