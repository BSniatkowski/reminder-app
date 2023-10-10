import { differenceInMilliseconds, endOfDay, isAfter, isToday } from 'date-fns'

import { IReminderItem } from '../../globalTypes/reminders.types'
import { ESyncActions, TSyncMethodsArgs } from '../../globalTypes/synchronization.types'
import { twoWayDateFormat } from '../../utils/twoWayDateFormat'
import { createWindow } from '../createWindow/createWindow'
import { getStoreAtMain } from '../../utils/synchronizeStore'
import { removeItem } from '../../utils/basicArrayOperations'
import { IReminderTimeout, IState } from './remindersTimeoutsTracker.types'

export const remindersTimeoutsTracker = () => {
  const state: IState = {
    remindersTimeouts: []
  }

  const setReminderTimeout = (reminder: IReminderItem) => {
    const timeToPopup = differenceInMilliseconds(twoWayDateFormat(reminder.date), new Date())

    if (timeToPopup <= 0) return

    const timeoutId = setTimeout(() => createWindow(true, reminder.id), timeToPopup)

    state.remindersTimeouts = [...state.remindersTimeouts, { id: reminder.id, timeoutId }]
  }

  const clearRemindersTimeouts = () => {
    for (const timeout of state.remindersTimeouts) {
      clearTimeout(timeout.timeoutId)
    }
  }

  const setRemindersTimeoutsForToday = (reminders: Array<IReminderItem>) => {
    const remindersForToday = reminders.filter((reminder) => {
      const reminderDate = twoWayDateFormat(reminder.date)

      return isAfter(reminderDate, new Date()) && isToday(reminderDate)
    })

    for (const reminder of remindersForToday) {
      setReminderTimeout(reminder)
    }
  }

  const setNextDaySynchronization = () => {
    const actualDate = new Date()
    const synchronizationTime = endOfDay(actualDate)

    setTimeout(
      () => {
        clearRemindersTimeouts()
        setRemindersTimeoutsForToday(getStoreAtMain())
        setNextDaySynchronization()
      },
      differenceInMilliseconds(synchronizationTime, actualDate)
    )
  }

  const initializeRemindersTimeouts = () => {
    const remindersFromStore = getStoreAtMain()

    setRemindersTimeoutsForToday(remindersFromStore)
    setNextDaySynchronization()
  }

  initializeRemindersTimeouts()

  const updateReminderTimeout = ({ action, payload }: TSyncMethodsArgs) => {
    clearTimeout(state.remindersTimeouts.find((timeout) => timeout.id === payload.id)?.timeoutId)

    state.remindersTimeouts = removeItem<IReminderTimeout>(state.remindersTimeouts, payload.id)

    if (action === ESyncActions.UPDATE || action === ESyncActions.ADD) {
      setReminderTimeout(payload)
    }
  }

  return { updateReminderTimeout }
}
