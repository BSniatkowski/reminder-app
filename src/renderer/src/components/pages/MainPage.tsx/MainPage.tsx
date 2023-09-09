import { Main } from '@renderer/components/templates/Main/Main'
import { selectAllReminders } from '@renderer/store/storeSlices/reminderSlice/remindersSlice.selectors'
import { useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import {
  TOnAddReminderClick,
  TOnEditReminderClick,
  TOnPreviewReminderClick
} from './MainPage.types'
import { textPreview } from '@renderer/utils/textPreview'
import { useNavigate } from 'react-router-dom'

export const MainPage: React.FC = () => {
  const reminders = useSelector(selectAllReminders)

  const formattedReminders = useMemo(() => {
    return reminders.map(({ title, description, ...props }) => {
      return {
        title: textPreview({ text: title, maxLength: 25 }),
        description: textPreview({ text: description, maxLength: 200 }),
        ...props
      }
    })
  }, [reminders])

  const navigate = useNavigate()

  const onAddReminderClick: TOnAddReminderClick = useCallback(() => {
    navigate(`/reminder/new`)
  }, [])

  const onPreviewReminderClick: TOnPreviewReminderClick = useCallback((id) => {
    navigate(`/reminder/${id}`)
  }, [])

  const onEditReminderClick: TOnEditReminderClick = useCallback((id) => {
    navigate(`/reminder/${id}/edit`)
  }, [])

  return (
    <Main
      reminders={formattedReminders}
      onPreviewReminderClick={onPreviewReminderClick}
      onAddReminderClick={onAddReminderClick}
      onEditReminderClick={onEditReminderClick}
    />
  )
}
