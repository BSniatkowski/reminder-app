import { Popup } from '@renderer/components/templates/Popup/Popup'
import { removeReminder } from '@renderer/store/storeSlices/reminderSlice/remindersSlice'
import { selectReminderById } from '@renderer/store/storeSlices/reminderSlice/remindersSlice.selectors'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const PopupPage: React.FC = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  const onClose = useCallback(() => {
    if (id) dispatch(removeReminder(id))
    window.api.closeWindow()
  }, [dispatch, id])

  const popupData = useSelector(selectReminderById(id))

  if (!popupData)
    return (
      <div onClick={onClose}>
        <Popup />
      </div>
    )

  const { title, description, date } = popupData

  console.log(title, description, date)

  return (
    <div onClick={onClose}>
      <Popup />
    </div>
  )
}
