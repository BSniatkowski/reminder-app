import { TOnEditReminderClick } from '@renderer/components/pages/MainPage.tsx/MainPage.types'

export interface IReminderProps {
  id: string
  title: string
  onReminderEditClick: TOnEditReminderClick
}
