import { createSlice } from '@reduxjs/toolkit'

import { v4 as uuidv4 } from 'uuid'
import { addItem, removeItem, updateItem } from '@utils/basicArrayOperations'
import { IReminderItem, IUpdatedReminderItem } from '@globalTypes/reminders.types'
import { ESyncActions } from '@globalTypes/synchronization.types'
import { store } from '@renderer/store/store'
import {
  TAddReminderAction,
  TRemoveReminderAction,
  TUpdateReminderAction
} from './remindersSlice.types'

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
    addReminder: (state, action: TAddReminderAction) => {
      const { isFromMain, ...props } = action.payload

      const newItem = { id: uuidv4(), ...props }

      state.remindersList = addItem<IReminderItem>(state.remindersList, newItem)

      if (!isFromMain)
        window.api.synchronizeReminders({ action: ESyncActions.ADD, payload: newItem })
    },
    removeReminder: (state, action: TRemoveReminderAction) => {
      const { id, isFromMain } = action.payload

      state.remindersList = removeItem<IReminderItem>(state.remindersList, id)

      if (!isFromMain)
        window.api.synchronizeReminders({ action: ESyncActions.REMOVE, payload: { id } })
    },
    updateReminder: (state, action: TUpdateReminderAction) => {
      const { isFromMain, ...props } = action.payload

      state.remindersList = updateItem<IReminderItem, IUpdatedReminderItem>(
        state.remindersList,
        props
      )

      if (!isFromMain)
        window.api.synchronizeReminders({
          action: ESyncActions.UPDATE,
          payload: props
        })
    }
  }
})

export const { addReminder, removeReminder, updateReminder } = remindersSlice.actions

window.api.handleSynchronizeReminders(({ action, payload }) => {
  switch (action) {
    case ESyncActions.ADD: {
      store.dispatch(addReminder({ ...payload, isFromMain: true }))
      break
    }
    case ESyncActions.REMOVE: {
      store.dispatch(removeReminder({ ...payload, isFromMain: true }))
      break
    }
    case ESyncActions.UPDATE: {
      store.dispatch(updateReminder({ ...payload, isFromMain: true }))
      break
    }
    default: {
      console.error(`Uknown action: ${action}`)
      break
    }
  }
})

export const remindersReducer = remindersSlice.reducer
