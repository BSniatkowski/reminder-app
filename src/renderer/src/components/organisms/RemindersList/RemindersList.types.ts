export interface IRemindersListProps {
  reminders: Array<{
    id: string
    title: string
  }>
  onAddReminderClick: () => void
  onReminderEditClick: (id: string) => void
}
