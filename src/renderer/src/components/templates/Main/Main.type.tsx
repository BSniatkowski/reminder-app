import { IReminderItem } from '@renderer/store/storeSlices/remindersSlice'

export interface IMainProps {
  reminders: Array<IReminderItem>
  onAddReminderClick: () => void
  onEditReminderClick: (id: string) => void
}
