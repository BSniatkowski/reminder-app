import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { v4 as uuidv4 } from 'uuid'
import { addItem, removeItem, updateItem } from '@utils/basicArrayOperations'
import { IReminderItem, IReminderItemBody } from '@globalTypes/reminders.types'
import { ESyncActions } from '@globalTypes/synchronization.types'

export interface IRemindersState {
  remindersList: Array<IReminderItem>
}

const initialState: IRemindersState = {
  remindersList: window.storeFromMain || []
}

export const remindersSlice = createSlice({
  name: 'reminders',
  initialState,
  reducers: {
    addReminder: (state, action: PayloadAction<IReminderItemBody>) => {
      const newItem = { id: uuidv4(), ...action.payload }

      state.remindersList = addItem<IReminderItem>(state.remindersList, newItem)

      window.api.synchronizeReminders({ action: ESyncActions.ADD, payload: newItem })
    },
    removeReminder: (state, action: PayloadAction<string>) => {
      state.remindersList = removeItem<IReminderItem>(state.remindersList, action.payload)

      window.api.synchronizeReminders({ action: ESyncActions.REMOVE, payload: action.payload })
    },
    updateReminder: (state, action: PayloadAction<IReminderItem>) => {
      state.remindersList = updateItem<IReminderItem>(state.remindersList, action.payload)

      window.api.synchronizeReminders({ action: ESyncActions.UPDATE, payload: action.payload })
    }
  }
})

export const { addReminder, removeReminder, updateReminder } = remindersSlice.actions

window.api.handleSynchronizeReminders(({ action, payload }) => {
  if (action === ESyncActions.ADD) addReminder(payload)
  if (action === ESyncActions.REMOVE) removeReminder(payload)
  if (action === ESyncActions.UPDATE) updateReminder(payload)
})

export const remindersReducer = remindersSlice.reducer
