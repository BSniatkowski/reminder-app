import { Popup } from '@renderer/components/templates/Popup/Popup'
import {
  removeReminder,
  updateReminder
} from '@renderer/store/storeSlices/reminderSlice/remindersSlice'
import { selectReminderById } from '@renderer/store/storeSlices/reminderSlice/remindersSlice.selectors'
import { twoWayDateFormat } from '@utils/twoWayDateFormat'
import { addMinutes } from 'date-fns'
import { useCallback, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const PopupPage: React.FC = () => {
  const { id } = useParams()

  const [isPostponeDialogVisible, setIsPostponeDialogVisible] = useState(false)
  const [isRemoveReminderDialogVisible, setIsRemoveReminderDialogVisible] = useState(false)

  const dispatch = useDispatch()

  const popupData = useSelector(selectReminderById(id))

  const postponeDialogMainText = useMemo(
    () =>
      `Are you sure you want to postpone reminder "${
        popupData?.title || 'Uknown popup'
      }" for 15 minutes?`,
    [popupData?.title]
  )

  const removeDialogMainText = useMemo(
    () => `Are you sure you want to delete: "${popupData?.title || 'Uknown popup'}"?`,
    [popupData?.title]
  )

  const onPostpone = useCallback(() => {
    setIsPostponeDialogVisible(true)
  }, [])

  const onPostponeDialogCancel = useCallback(() => {
    setIsPostponeDialogVisible(false)
  }, [])

  const onPostponeDialogAccept = useCallback(() => {
    if (!id) return

    const newDate = addMinutes(new Date(), 15)
    dispatch(updateReminder({ id, date: twoWayDateFormat(newDate) }))

    window.api.closeWindow()
  }, [dispatch, id])

  const onRemove = useCallback(() => {
    setIsRemoveReminderDialogVisible(true)
  }, [])

  const onRemoveDialogCancel = useCallback(() => {
    setIsRemoveReminderDialogVisible(false)
  }, [])

  const onRemoveDialogAccept = useCallback(() => {
    if (id) dispatch(removeReminder({ id }))

    window.api.closeWindow()
  }, [dispatch, id])

  return (
    <Popup
      title={popupData?.title || 'Uknown popup'}
      description={popupData?.description || ''}
      isPostponeDialogVisible={isPostponeDialogVisible}
      isRemoveReminderDialogVisible={isRemoveReminderDialogVisible}
      postponeDialogMainText={postponeDialogMainText}
      removeDialogMainText={removeDialogMainText}
      onPostpone={onPostpone}
      onPostponeDialogCancel={onPostponeDialogCancel}
      onPostponeDialogAccept={onPostponeDialogAccept}
      onRemove={onRemove}
      onRemoveDialogCancel={onRemoveDialogCancel}
      onRemoveDialogAccept={onRemoveDialogAccept}
    />
  )
}
