import { Main } from '@renderer/components/templates/Main/Main'
import { selectAllReminders } from '@renderer/store/storeSlices/reminderSlice/remindersSlice.selectors'
import { useCallback, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  EReminderSections,
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
import { twoWayDateFormat } from '@utils/twoWayDateFormat'
import { addDays, isAfter, isBefore, isSameDay, isToday } from 'date-fns'

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

  const assignSection = (date: string) => {
    const formattedDate = twoWayDateFormat(date)

    const actualDate = new Date()

    if (isBefore(formattedDate, actualDate)) return { section: EReminderSections.archive }

    if (isToday(formattedDate)) return { section: EReminderSections.today }

    if (isSameDay(addDays(formattedDate, 1), actualDate))
      return { section: EReminderSections.tomorrow }

    if (isAfter(addDays(formattedDate, 1), actualDate)) return { section: EReminderSections.future }

    return {}
  }

  const formattedReminders = useMemo(
    () =>
      [...reminders]
        .sort(
          (itemA, itemB) =>
            twoWayDateFormat(itemA.date).getTime() - twoWayDateFormat(itemB.date).getTime()
        )
        .map(({ title, description, date, ...props }) => ({
          title: textPreview({ text: title, maxLength: 25 }),
          description: textPreview({ text: description ?? '', maxLength: 200 }),
          date,
          ...assignSection(date),
          ...props
        })),
    [reminders]
  )

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
