import { IReminderItemBody } from '@renderer/store/storeSlices/reminderSlice/remindersSlice'

export interface IReminderPreviewProps extends IReminderItemBody {
  onEditReminderClick: () => void
}
