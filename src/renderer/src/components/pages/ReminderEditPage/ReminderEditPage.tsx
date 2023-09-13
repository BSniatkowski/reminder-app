import { ReminderEdit } from '@renderer/components/templates/ReminderEdit/ReminderEdit'
import {
  IReminderItem,
  updateReminder
} from '@renderer/store/storeSlices/reminderSlice/remindersSlice'
import { useDispatch } from 'react-redux'
import { useLoaderData, useNavigate } from 'react-router-dom'

export const ReminderEditPage = () => {
  const {
    reminder: { id, title, description, date }
  } = useLoaderData() as { reminder: IReminderItem }

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const onSubmit = (formValues) => {
    dispatch(updateReminder({ id, ...formValues }))
    navigate(`/reminder/${id}`)
  }

  return <ReminderEdit title={title} description={description} date={date} onSubmit={onSubmit} />
}
