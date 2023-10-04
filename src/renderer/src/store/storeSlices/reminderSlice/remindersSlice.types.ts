import { IReminderItemBody, IUpdatedReminderItem } from '@globalTypes/reminders.types'
import { PayloadAction } from '@reduxjs/toolkit'

export type TAddReminderAction = PayloadAction<
  IReminderItemBody & {
    isFromMain?: boolean
  }
>

export type TRemoveReminderAction = PayloadAction<{ id: string; isFromMain?: boolean }> & {
  isFromMain?: boolean
}

export type TUpdateReminderAction = PayloadAction<
  IUpdatedReminderItem & {
    isFromMain?: boolean
  }
>
