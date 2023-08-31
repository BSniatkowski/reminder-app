import { Main } from '@renderer/components/templates/Main/Main'
import { selectAllReminders } from '@renderer/store/storeSlices/remindersSlice.selectors'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'

export const MainPage: React.FC = () => {
  const reminders = useSelector(selectAllReminders)

  const onAddReminderClick = useCallback(() => {
    console.log('Show reminder add page')
  }, [])

  const onEditReminderClick = useCallback(() => {
    console.log('Show reminder edit page')
  }, [])

  return (
    <Main
      reminders={reminders}
      onAddReminderClick={onAddReminderClick}
      onEditReminderClick={onEditReminderClick}
    />
  )
}
