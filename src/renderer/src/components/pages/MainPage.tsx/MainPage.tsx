import { Main } from '@renderer/components/templates/Main/Main'
import { selectAllReminders } from '@renderer/store/storeSlices/reminderSlice/remindersSlice.selectors'
import { useCallback, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EReminderSections } from './MainPage.types'
import { textPreview } from '@renderer/utils/textPreview'
import { twoWayDateFormat } from '@utils/twoWayDateFormat'
import { addDays, isAfter, isBefore, isSameDay, isToday } from 'date-fns'
import { ReminderEditForm } from '@renderer/components/organisms/ReminderEditForm/ReminderEditForm'
import {
  addReminder,
  removeReminder,
  updateReminder
} from '@renderer/store/storeSlices/reminderSlice/remindersSlice'
import { IReminderItemBody } from '@globalTypes/reminders.types'

export const MainPage: React.FC = () => {
  const dispatch = useDispatch()

  const reminders = useSelector(selectAllReminders)

  const [actualReminderId, setActualReminderId] = useState<null | string>(null)
  const [isFormVisible, setIsFormVisible] = useState(false)

  const reminder = useMemo(
    () => reminders.find(({ id }) => id === actualReminderId),
    [actualReminderId, reminders]
  )

  const assignSection = (date: string) => {
    const formattedDate = twoWayDateFormat(date)

    const actualDate = new Date()

    if (isBefore(formattedDate, actualDate)) return EReminderSections.archive

    if (isToday(formattedDate)) return EReminderSections.today

    if (isSameDay(formattedDate, addDays(actualDate, 1))) return EReminderSections.tomorrow

    if (isAfter(addDays(formattedDate, 1), actualDate)) return EReminderSections.future

    return EReminderSections.archive
  }

  const [actualFilters] = useState<Array<EReminderSections>>([
    EReminderSections.archive,
    EReminderSections.today,
    EReminderSections.tomorrow,
    EReminderSections.future
  ])

  const formattedReminders = useMemo(
    () =>
      [...reminders]
        .filter(({ date }) => actualFilters.includes(assignSection(date)))
        .sort(
          (itemA, itemB) =>
            twoWayDateFormat(itemA.date).getTime() - twoWayDateFormat(itemB.date).getTime()
        )
        .map(({ id, title, date }) => ({
          id,
          title: textPreview({ text: title, maxLength: 14 }),
          date
        })),
    [actualFilters, reminders]
  )

  const onAddReminderClick = useCallback(() => {
    setIsFormVisible(true)
  }, [])

  const onReminderClick = useCallback<(id: string) => void>((id) => {
    setActualReminderId(id)
    setIsFormVisible(true)
  }, [])

  const onDelete = useCallback(() => {
    setIsFormVisible(false)
    if (!actualReminderId) return

    dispatch(removeReminder({ id: actualReminderId }))
    setActualReminderId(null)
  }, [actualReminderId, dispatch])

  const onSubmit = useCallback<(formValues: IReminderItemBody) => void>(
    (formValues) => {
      dispatch(
        actualReminderId
          ? updateReminder({ id: actualReminderId, ...formValues })
          : addReminder(formValues)
      )
      setIsFormVisible(false)
      setActualReminderId(null)
    },
    [actualReminderId, dispatch]
  )

  return (
    <>
      <Main
        reminders={formattedReminders}
        onReminderClick={onReminderClick}
        onAddReminderClick={onAddReminderClick}
      />
      <ReminderEditForm
        isFormVisible={isFormVisible}
        reminder={reminder}
        onDelete={!!actualReminderId && onDelete}
        onSubmit={onSubmit}
      />
    </>
  )
}
