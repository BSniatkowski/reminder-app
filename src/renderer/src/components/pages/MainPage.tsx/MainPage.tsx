import { Main } from '@renderer/components/templates/Main/Main'
import { selectAllReminders } from '@renderer/store/storeSlices/reminderSlice/remindersSlice.selectors'
import { useCallback, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { EReminderSections } from './MainPage.types'
import { textPreview } from '@renderer/utils/textPreview'
import { useNavigate } from 'react-router-dom'
import { twoWayDateFormat } from '@utils/twoWayDateFormat'
import { addDays, isAfter, isBefore, isSameDay, isToday } from 'date-fns'

export const MainPage: React.FC = () => {
  const reminders = useSelector(selectAllReminders)

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

  const navigate = useNavigate()

  const onAddReminderClick = useCallback(() => {
    navigate(`/reminder/new/edit`)
  }, [navigate])

  return <Main reminders={formattedReminders} onAddReminderClick={onAddReminderClick} />
}
