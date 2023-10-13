import { store } from '@renderer/store/store'
import { selectReminderById } from '@renderer/store/storeSlices/reminderSlice/remindersSlice.selectors'
import { twoWayDateFormat } from '@utils/twoWayDateFormat'
import { redirect } from 'react-router-dom'

export const ReminderLoader = ({ params }: { params: { id?: string } }) => {
  const reminder =
    params?.id === 'new'
      ? {
          title: 'New reminder',
          description: '',
          link: '',
          autoOpenLink: false,
          autoPlay: true,
          date: twoWayDateFormat(new Date())
        }
      : selectReminderById(params?.id)(store.getState()) ?? redirect('/404')

  return { reminder }
}
