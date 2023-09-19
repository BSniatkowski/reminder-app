import { ReminderPreview } from '@renderer/components/templates/ReminderPreview/ReminderPreview'
import { IReminderItem } from '@renderer/store/storeSlices/reminderSlice/remindersSlice'
import { useCallback } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

export const ReminderPage = () => {
  const {
    reminder: { id, title, description, date }
  } = useLoaderData() as { reminder: IReminderItem }

  const navigate = useNavigate()

  const onEditReminderClick = useCallback(() => navigate(`/reminder/${id}/edit`), [id, navigate])

  return (
    <ReminderPreview
      title={title}
      description={description}
      date={date}
      onEditReminderClick={onEditReminderClick}
    />
  )
}
