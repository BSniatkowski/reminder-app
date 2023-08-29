import { Main } from '@renderer/components/templates/Main/Main'
import { addReminder } from '@renderer/store/storeSlices/remindersSlice'
import { selectAllReminders } from '@renderer/store/storeSlices/remindersSlice.selectors'
import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const MainPage: React.FC = () => {
  const reminders = useSelector(selectAllReminders)

  const dispatch = useDispatch()

  const onAddReminderClick = useCallback(
    () => dispatch(addReminder({ title: 'Example reminder', date: new Date().toString() })),
    []
  )

  return (
    <div onClick={onAddReminderClick}>
      <Main />
      <button
        onClick={() => {
          console.log(reminders)
        }}
      >
        Refresh state
      </button>
    </div>
  )
}
