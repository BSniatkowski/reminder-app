import { Main } from '@renderer/components/templates/Main/Main'
import { selectAllReminders } from '@renderer/store/storeSlices/remindersSlice.selectors'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { TOnAddReminderClick, TOnEditReminderClick } from './MainPage.types'

export const MainPage: React.FC = () => {
  const reminders = useSelector(selectAllReminders)

  const onAddReminderClick: TOnAddReminderClick = useCallback(() => {
    console.log('Show reminder add page')
  }, [])

  const onEditReminderClick: TOnEditReminderClick = useCallback(() => {
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
