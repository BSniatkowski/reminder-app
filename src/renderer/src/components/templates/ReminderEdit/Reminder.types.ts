import { IReminderItemBody } from '@renderer/store/storeSlices/reminderSlice/remindersSlice'

export interface IReminderEditProps extends IReminderItemBody {
  onSubmit: (formValues: unknown) => void
}
