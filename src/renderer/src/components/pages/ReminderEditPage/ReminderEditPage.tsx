import { ReminderEdit } from '@renderer/components/templates/ReminderEdit/ReminderEdit'
import { IReminderItem } from '@renderer/store/storeSlices/reminderSlice/remindersSlice'
import { useLoaderData } from 'react-router-dom'

export const ReminderEditPage = () => {
  const { reminder } = useLoaderData() as { reminder: IReminderItem }

  return <ReminderEdit reminder={reminder} />
}
