import { store } from '@renderer/store/store'
import { selectReminderById } from '@renderer/store/storeSlices/reminderSlice/remindersSlice.selectors'
import { redirect } from 'react-router-dom'

export const ReminderLoader = ({ params }) => {
  const reminder = selectReminderById(params.id)(store.getState()) ?? redirect('/404')

  return { reminder }
}
