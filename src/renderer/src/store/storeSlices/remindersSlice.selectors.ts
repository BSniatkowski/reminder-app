import { RootState } from '../store'

export const selectAllReminders = (state: RootState) => state.reminders.remindersList

export const selectReminderById = (id?: string) => (state: RootState) =>
  id && state.reminders.remindersList.find((reminder) => reminder.id === id)
