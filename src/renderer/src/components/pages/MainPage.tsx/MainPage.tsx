import { Main } from '@renderer/components/templates/Main/Main'
import { selectAllReminders } from '@renderer/store/storeSlices/reminderSlice/remindersSlice.selectors'
import { useCallback, useEffect, useMemo, useState } from 'react'
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
import { RemindersSearchForm } from '@renderer/components/organisms/RemindersSearchForm/RemindersSearchForm'

export const MainPage: React.FC = () => {
  const dispatch = useDispatch()

  const reminders = useSelector(selectAllReminders)

  const [actualReminderId, setActualReminderId] = useState<null | string>(null)
  const [isEditFormVisible, setIsEditFormVisible] = useState(false)
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false)
  const [actualDate, setActualDate] = useState(new Date())

  const reminder = useMemo(
    () => reminders.find(({ id }) => id === actualReminderId),
    [actualReminderId, reminders]
  )

  const assignSection = useCallback(
    (date: string) => {
      const formattedDate = twoWayDateFormat(date)

      if (isBefore(formattedDate, actualDate)) return EReminderSections.archive

      if (isToday(formattedDate)) return EReminderSections.today

      if (isSameDay(formattedDate, addDays(actualDate, 1))) return EReminderSections.tomorrow

      if (isAfter(addDays(formattedDate, 1), actualDate)) return EReminderSections.future

      return EReminderSections.archive
    },
    [actualDate]
  )

  const [actualFilters, setActualFilters] = useState<Array<EReminderSections>>([
    EReminderSections.today,
    EReminderSections.tomorrow,
    EReminderSections.future
  ])
  const [searchPhrase, setSearchPhrase] = useState('')

  const formattedReminders = useMemo(
    () =>
      [...reminders]
        .filter(({ title, date }) =>
          searchPhrase.length > 0
            ? title.toLocaleLowerCase().includes(searchPhrase.toLocaleLowerCase()) &&
              actualFilters.includes(assignSection(date))
            : actualFilters.includes(assignSection(date))
        )
        .sort(
          (itemA, itemB) =>
            twoWayDateFormat(itemA.date).getTime() - twoWayDateFormat(itemB.date).getTime()
        )
        .map(({ id, title, date }) => ({
          id,
          title: textPreview({ text: title, maxLength: 14 }),
          date
        })),
    [actualFilters, assignSection, reminders, searchPhrase]
  )

  const onAddReminderClick = useCallback(() => {
    setIsEditFormVisible(true)
    setIsSearchFormVisible(false)
  }, [])

  const onReminderClick = useCallback<(id: string) => void>((id) => {
    setActualReminderId(id)
    setIsEditFormVisible(true)
    setIsSearchFormVisible(false)
  }, [])

  const onDelete = useCallback(() => {
    setIsEditFormVisible(false)
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
      setIsEditFormVisible(false)
      setActualReminderId(null)
    },
    [actualReminderId, dispatch]
  )

  useEffect(() => {
    const dateUpdateInterval = setInterval(() => setActualDate(new Date()), 500)

    return () => clearInterval(dateUpdateInterval)
  }, [])

  return (
    <>
      <Main
        reminders={formattedReminders}
        onReminderClick={onReminderClick}
        onAddReminderClick={onAddReminderClick}
      />
      <ReminderEditForm
        isFormVisible={isEditFormVisible}
        hideForm={() => setIsEditFormVisible(false)}
        reminder={reminder}
        onDelete={!!actualReminderId && onDelete}
        onSubmit={onSubmit}
      />
      <RemindersSearchForm
        isFormVisible={isSearchFormVisible}
        toggleFormVisibility={() => {
          setIsSearchFormVisible(!isSearchFormVisible)
          setIsEditFormVisible(false)
        }}
        onSubmit={(values) => {
          const { search, ...props } = values

          const filters = Object.entries(props)
            .map(([filter, isActive]) => isActive && filter)
            .filter((filter) => filter) as Array<EReminderSections>

          setSearchPhrase(search)
          setActualFilters(filters)
        }}
      />
    </>
  )
}
