import { Popup } from '@renderer/components/templates/Popup/Popup'
import {
  removeReminder,
  updateReminder
} from '@renderer/store/storeSlices/reminderSlice/remindersSlice'
import { selectReminderById } from '@renderer/store/storeSlices/reminderSlice/remindersSlice.selectors'
import { twoWayDateFormat } from '@utils/twoWayDateFormat'
import { addMinutes } from 'date-fns'
import { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import popupSound from '@assets/sounds/popup_open.mp3'

export const PopupPage: React.FC = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  const popupData = useSelector(selectReminderById(id))

  const videoId = useMemo(() => {
    const link = popupData?.link

    const isYoutubeLink = link?.match(
      /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/gm
    )?.length

    if (!isYoutubeLink) return

    return link.slice(link?.indexOf('=') + 1, link?.indexOf('&'))
  }, [popupData?.link])

  const onPostpone = useCallback(() => {
    if (!id) return

    const newDate = addMinutes(new Date(), 15)
    dispatch(updateReminder({ id, date: twoWayDateFormat(newDate) }))

    window.api.closeWindow()
  }, [dispatch, id])

  const onRemove = useCallback(() => {
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
      onDone={() => window.api.closeWindow()}
      onPostpone={onPostpone}
      onRemove={onRemove}
    />
  ) : (
    <>Error page placeholder</>
  )
}
