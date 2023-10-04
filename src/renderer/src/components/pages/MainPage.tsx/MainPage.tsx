import { Main } from '@renderer/components/templates/Main/Main'
import { selectAllReminders } from '@renderer/store/storeSlices/reminderSlice/remindersSlice.selectors'
import { useCallback, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  TOnAddReminderClick,
  TOnDialogAcceptClick,
  TOnDialogCancelClick,
  TOnEditReminderClick,
  TOnPreviewReminderClick,
  TOnRemoveReminderClick
} from './MainPage.types'
import { textPreview } from '@renderer/utils/textPreview'
import { useNavigate } from 'react-router-dom'
import { removeReminder } from '@renderer/store/storeSlices/reminderSlice/remindersSlice'

export const MainPage: React.FC = () => {
  const reminders = useSelector(selectAllReminders)

  const [isDialogVisible, setIsDialogVisible] = useState(false)
  const [selectedReminderId, setSelectedReminderId] = useState<null | string>(null)

  const dialogMainText = useMemo(() => {
    if (!selectedReminderId) return ''

    return `Are you sure you want to delete: "${reminders.find(
      ({ id }) => id === selectedReminderId
    )?.title}"?`
  }, [reminders, selectedReminderId])

  const formattedReminders = useMemo(() => {
    return reminders.map(({ title, description, ...props }) => {
      return {
        title: textPreview({ text: title, maxLength: 25 }),
        description: textPreview({ text: description ?? '', maxLength: 200 }),
        ...props
      }
    })
  }, [reminders])

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const onAddReminderClick: TOnAddReminderClick = useCallback(() => {
    navigate(`/reminder/new/edit`)
  }, [navigate])

  const onPreviewReminderClick: TOnPreviewReminderClick = useCallback(
    (id) => {
      navigate(`/reminder/${id}`)
    },
    [navigate]
  )

  const onEditReminderClick: TOnEditReminderClick = useCallback(
    (id) => {
      navigate(`/reminder/${id}/edit`)
    },
    [navigate]
  )

  const onRemoveReminderClick: TOnRemoveReminderClick = useCallback((id) => {
    setSelectedReminderId(id)
    setIsDialogVisible(true)
  }, [])

  const onDialogCancelClick: TOnDialogCancelClick = useCallback(() => {
    setIsDialogVisible(false)
    setSelectedReminderId(null)
  }, [])

  const onDialogAcceptClick: TOnDialogAcceptClick = useCallback(() => {
    setIsDialogVisible(false)
    if (selectedReminderId) dispatch(removeReminder({ id: selectedReminderId }))
  }, [dispatch, selectedReminderId])

  return (
    <Main
      reminders={formattedReminders}
      isDialogVisible={isDialogVisible}
      dialogMainText={dialogMainText}
      onPreviewReminderClick={onPreviewReminderClick}
      onAddReminderClick={onAddReminderClick}
      onEditReminderClick={onEditReminderClick}
      onRemoveReminderClick={onRemoveReminderClick}
      onDialogCancelClick={onDialogCancelClick}
      onDialogAcceptClick={onDialogAcceptClick}
    />
  )
}
