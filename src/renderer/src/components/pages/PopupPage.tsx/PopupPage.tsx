import { Popup } from '@renderer/components/templates/Popup/Popup'
import {
  removeReminder,
  updateReminder
} from '@renderer/store/storeSlices/reminderSlice/remindersSlice'
import { selectReminderById } from '@renderer/store/storeSlices/reminderSlice/remindersSlice.selectors'
import { twoWayDateFormat } from '@utils/twoWayDateFormat'
import { addMinutes } from 'date-fns'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import popupSound from '@assets/sounds/popup_open.mp3'

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

  const videoId = useMemo(() => {
    const link = popupData?.link

    const isYoutubeLink = link?.match(
      /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/gm
    )?.length

    if (!isYoutubeLink) return

    return link.slice(link?.indexOf('=') + 1, link?.indexOf('&'))
  }, [popupData?.link])

  const onPostponeDialogAccept = useCallback(() => {
    if (!id) return

    const newDate = addMinutes(new Date(), 15)
    dispatch(updateReminder({ id, date: twoWayDateFormat(newDate) }))

    window.api.closeWindow()
  }, [dispatch, id])

  const onRemoveDialogAccept = useCallback(() => {
    if (id) dispatch(removeReminder({ id }))

    window.api.closeWindow()
  }, [dispatch, id])

  useEffect(() => {
    const audio = new Audio(popupSound)

    audio.oncanplay = () => audio.play()
  }, [])

  return popupData ? (
    <Popup
      {...popupData}
      videoId={videoId}
      isPostponeDialogVisible={isPostponeDialogVisible}
      isRemoveReminderDialogVisible={isRemoveReminderDialogVisible}
      postponeDialogMainText={postponeDialogMainText}
      removeDialogMainText={removeDialogMainText}
      onDone={() => window.api.closeWindow()}
      onPostpone={() => setIsPostponeDialogVisible(true)}
      onPostponeDialogCancel={() => setIsPostponeDialogVisible(false)}
      onPostponeDialogAccept={onPostponeDialogAccept}
      onRemove={() => setIsRemoveReminderDialogVisible(true)}
      onRemoveDialogCancel={() => setIsRemoveReminderDialogVisible(false)}
      onRemoveDialogAccept={onRemoveDialogAccept}
    />
  ) : (
    <>Error page placeholder</>
  )
}
