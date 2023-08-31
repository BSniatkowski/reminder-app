import { IReminderItem } from '@renderer/store/storeSlices/remindersSlice'

export interface IMain {
  reminders: Array<IReminderItem>
  onAddReminderClick: () => void
  onEditReminderClick: (id: string) => void
}
