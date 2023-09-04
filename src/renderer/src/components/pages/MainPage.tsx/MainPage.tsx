import { Main } from '@renderer/components/templates/Main/Main'
import { selectAllReminders } from '@renderer/store/storeSlices/reminderSlice/remindersSlice.selectors'
import { useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { TOnAddReminderClick, TOnEditReminderClick } from './MainPage.types'
import { textPreview } from '@renderer/utils/textPreview'

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

  const onAddReminderClick: TOnAddReminderClick = useCallback(() => {
    console.log('Show reminder add page')
  }, [])

  const onEditReminderClick: TOnEditReminderClick = useCallback(() => {
    console.log('Show reminder edit page')
  }, [])

  return (
    <Main
      reminders={formattedReminders}
      onAddReminderClick={onAddReminderClick}
      onEditReminderClick={onEditReminderClick}
    />
  )
}
