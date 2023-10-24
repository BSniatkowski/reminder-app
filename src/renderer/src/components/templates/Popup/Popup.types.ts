import { IReminderItemBody } from '@globalTypes/reminders.types'

export type TPopupProps = Omit<IReminderItemBody, 'date' | 'autoOpenLink'> & {
  videoId?: string
  onDone: () => void
  onPostpone: () => void
  onRemove: () => void
}

export interface IPopupWrapperProps {
  $withVideo: boolean
  $isSmall: boolean
}

export interface IButtonsContainerProps {
  $isSmall: boolean
}
