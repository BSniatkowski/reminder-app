import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { v4 as uuidv4 } from 'uuid'

export interface IReminderItemBody {
  title: string
  description: string
  date: string
}

export interface IReminderItem extends IReminderItemBody {
  id: string
}

export interface IRemindersState {
  remindersList: Array<IReminderItem>
}

const initialState: IRemindersState = {
  remindersList: [
    {
      id: '0',
      title: 'Pariatur Lorem ad voluptate aute Lorem.',
      description:
        'Aute duis aliquip eiusmod id elit aliqua labore. Minim velit https://www.youtube.com/ velit dolore voluptate sint irure id. Enim voluptate laboris do irure ex nisi laboris https://www.youtube.com/ ipsum ullamco proident eiusmod. Consectetur ex veniam id aute laboris culpa. Non sit veniam minim dolor id magna est enim ex. Et ad id incididunt duis incididunt cillum fugiat officia anim https://www.facebook.com/ labore aliqua elit veniam.',
      date: new Date().toString()
    },
    {
      id: '1',
      title:
        'Non minim sint dolore consectetur proident veniam in ullamco fugiat reprehenderit dolore eiusmod dolor officia.',
      description:
        'Et non adipisicing https://www.youtube.com/ nostrud consectetur aliqua eu irure ea id proident aute https://www.youtube.com/ adipisicing dolor velit. Reprehenderit enim in excepteur ullamco est velit occaecat et eu eiusmod pariatur eu et. Nostrud dolor ullamco ut enim aliquip duis labore duis officia culpa reprehenderit mollit veniam fugiat. Reprehenderit magna nostrud pariatur adipisicing non officia ad proident. Officia ad labore non occaecat non do dolor magna https://www.facebook.com/ ullamco. Ex sunt in incididunt dolore ut aliquip.',
      date: new Date().toString()
    },
    {
      id: '2',
      title: 'Laboris officia culpa aute adipisicing commodo aliqua est eu qui fugiat est et.',
      description: 'Laboris laborum dolor dolor excepteur labore irure excepteur nisi.',
      date: new Date().toString()
    },
    {
      id: '3',
      title: 'Consectetur reprehenderit consequat in nisi commodo.',
      description:
        'Consectetur aute et pariatur cupidatat excepteur https://electron-vite.org/ in ex. https://electron-vite.org/ Elit https://electron-vite.org/ magna excepteur sint culpa. Duis dolore qui reprehenderit irure quis deserunt in commodo. Consectetur labore ex in reprehenderit https://electron-vite.org/ nisi fugiat do. Ipsum velit consectetur do nisi cupidatat esse eiusmod fugiat ipsum ullamco veniam laboris. Eiusmod qui et ut aute eiusmod laboris velit laborum minim est fugiat. Eu https://electron-vite.org/ aliquip consectetur pariatur ex amet commodo aute pariatur https://electron-vite.org/ consectetur ipsum anim officia sit.',
      date: new Date().toString()
    }
  ]
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

      console.log(foundReminderIndex)

      if (typeof foundReminderIndex === 'number') {
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
