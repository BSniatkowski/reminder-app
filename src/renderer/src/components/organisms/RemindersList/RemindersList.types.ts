export interface IRemindersList {
  reminders: Array<{
    id: string
    title: string
  }>
  onReminderEditClick: (id: string) => void
  onAddNewReminderClick: () => void
}
