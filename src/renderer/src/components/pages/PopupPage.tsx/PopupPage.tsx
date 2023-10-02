import { Popup } from '@renderer/components/templates/Popup/Popup'
import {
  removeReminder,
  updateReminder
} from '@renderer/store/storeSlices/reminderSlice/remindersSlice'
import { selectReminderById } from '@renderer/store/storeSlices/reminderSlice/remindersSlice.selectors'
import { twoWayDateFormat } from '@utils/twoWayDateFormat'
import { addMinutes } from 'date-fns'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const PopupPage: React.FC = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  const popupData = useSelector(selectReminderById(id))

  const onClose = useCallback(() => {
    if (id) dispatch(removeReminder({ id }))
    window.api.closeWindow()
  }, [dispatch, id])

  const onPostpone = useCallback(() => {
    if (id) {
      const newDate = addMinutes(new Date(), 15)
      dispatch(updateReminder({ id, date: twoWayDateFormat(newDate) }))
    }
    window.api.closeWindow()
  }, [dispatch, id])

  return (
    <Popup
      title={popupData?.title || 'Uknown popup'}
      description={popupData?.description || ''}
      onPostpone={onPostpone}
      onClose={onClose}
    />
  )
}
