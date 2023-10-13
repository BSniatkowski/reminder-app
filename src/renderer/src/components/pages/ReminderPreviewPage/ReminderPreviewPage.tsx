import { IReminderItem } from '@globalTypes/reminders.types'
import { ReminderPreview } from '@renderer/components/templates/ReminderPreview/ReminderPreview'
import { removeReminder } from '@renderer/store/storeSlices/reminderSlice/remindersSlice'
import { useCallback, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLoaderData, useNavigate } from 'react-router-dom'

export const ReminderPage = () => {
  const {
    reminder: { id, title, description, link, autoOpenLink, autoPlay, date }
  } = useLoaderData() as { reminder: IReminderItem }

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [isDialogVisible, setIsDialogVisible] = useState(false)

  const dialogMainText = useMemo(() => {
    if (!id) return ''

    return `Are you sure you want to delete: "${title}"?`
  }, [id, title])

  const onEditReminderClick = useCallback(() => navigate(`/reminder/${id}/edit`), [id, navigate])

  const onRemoveReminderClick = useCallback(() => {
    setIsDialogVisible(true)
  }, [])

  const onDialogCancelClick = useCallback(() => {
    setIsDialogVisible(false)
  }, [])

  const onDialogAcceptClick = useCallback(() => {
    dispatch(removeReminder({ id }))
    navigate('/')
  }, [dispatch, id, navigate])

  return (
    <ReminderPreview
      title={title}
      description={description}
      link={link}
      autoOpenLink={autoOpenLink}
      autoPlay={autoPlay}
      date={date}
      onEditReminderClick={onEditReminderClick}
      onRemoveReminderClick={onRemoveReminderClick}
      isDialogVisible={isDialogVisible}
      dialogMainText={dialogMainText}
      onDialogCancelClick={onDialogCancelClick}
      onDialogAcceptClick={onDialogAcceptClick}
    />
  )
}
