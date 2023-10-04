import { IReminderItem } from '@globalTypes/reminders.types'
import { ReminderPreview } from '@renderer/components/templates/ReminderPreview/ReminderPreview'
import { removeReminder } from '@renderer/store/storeSlices/reminderSlice/remindersSlice'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useLoaderData, useNavigate } from 'react-router-dom'

export const ReminderPage = () => {
  const {
    reminder: { id, title, description, date }
  } = useLoaderData() as { reminder: IReminderItem }

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const onEditReminderClick = useCallback(() => navigate(`/reminder/${id}/edit`), [id, navigate])
  const onRemoveReminderClick = useCallback(() => {
    dispatch(removeReminder({ id }))
    navigate('/')
  }, [dispatch, id, navigate])

  return (
    <ReminderPreview
      title={title}
      description={description}
      date={date}
      onEditReminderClick={onEditReminderClick}
      onRemoveReminderClick={onRemoveReminderClick}
    />
  )
}
