import { differenceInMilliseconds, endOfDay, isAfter, isToday } from 'date-fns'

import { IReminderItem } from '../../globalTypes/reminders.types'
import { ESyncActions, TSyncMethodsArgs } from '../../globalTypes/synchronization.types'
import { twoWayDateFormat } from '../../utils/twoWayDateFormat'
import { createWindow } from '../createWindow/createWindow'
import { getStoreAtMain } from '../../utils/synchronizeStore'

export const remindersTimeoutsTracker = () => {
  const state: {
    remindersTimeouts: Array<{ reminderId: string; timeoutId: ReturnType<typeof setTimeout> }>
  } = {
    remindersTimeouts: []
  }

  const setReminderTimeout = (reminder: IReminderItem) => {
    const timeToPopup = differenceInMilliseconds(twoWayDateFormat(reminder.date), new Date())

    const timeoutId = setTimeout(() => createWindow(true, reminder.id), timeToPopup)

    state.remindersTimeouts = [...state.remindersTimeouts, { reminderId: reminder.id, timeoutId }]

    console.log('Setting reminder timeout', { reminderId: reminder.id, timeoutId })
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
    const synchronizationTimeout = endOfDay(new Date())

    setTimeout(
      () => {
        clearRemindersTimeouts()
        setRemindersTimeoutsForToday(getStoreAtMain())
        setNextDaySynchronization()
      },
      differenceInMilliseconds(synchronizationTimeout, new Date())
    )
  }

  const initializeRemindersTimeouts = () => {
    const remindersFromStore = getStoreAtMain()

    setRemindersTimeoutsForToday(remindersFromStore)
    setNextDaySynchronization()
  }

  initializeRemindersTimeouts()

  const updateReminderTimeout = ({ action, payload }: TSyncMethodsArgs) => {
    if (action === ESyncActions.UPDATE || action === ESyncActions.ADD) {
      clearTimeout(
        state.remindersTimeouts.find((timeout) => timeout.reminderId === payload.id)?.timeoutId
      )

      setReminderTimeout(payload)
    }

    if (action === ESyncActions.REMOVE) {
      clearTimeout(
        state.remindersTimeouts.find((timeout) => timeout.reminderId === payload)?.timeoutId
      )
    }
  }

  return { updateReminderTimeout }
}
