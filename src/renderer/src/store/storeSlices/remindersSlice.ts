import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { v4 as uuidv4 } from 'uuid'

export interface IReminderItemBody {
  title: string
  description?: string
  date: string
}

export interface IReminderItem extends IReminderItemBody {
  id: string
}

export interface IRemindersState {
  remindersList: Array<IReminderItem>
}

const initialState: IRemindersState = {
  remindersList: []
}

export const remindersSlice = createSlice({
  name: 'reminders',
  initialState,
  reducers: {
    addReminder: (state, action: PayloadAction<IReminderItemBody>) => {
      state.remindersList = [...state.remindersList, { id: uuidv4(), ...action.payload }]
    },
    removeReminder: (state, action: PayloadAction<string>) => {
      state.remindersList = state.remindersList.filter((reminder) => reminder.id !== action.payload)
      console.log(state.remindersList)
    },
    updateReminder: (state, action: PayloadAction<IReminderItem>) => {
      const foundReminderIndex = state.remindersList.findIndex(
        (reminder) => reminder.id === action.payload.id
      )

      if (foundReminderIndex) {
        state.remindersList = [
          ...state.remindersList.slice(0, foundReminderIndex),
          action.payload,
          ...state.remindersList.slice(foundReminderIndex + 1)
        ]
      }
    }
  }
})

export const { addReminder, removeReminder, updateReminder } = remindersSlice.actions

export const remindersReducer = remindersSlice.reducer
