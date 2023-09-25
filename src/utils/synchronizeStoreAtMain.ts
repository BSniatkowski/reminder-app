import os from 'os'
import { accessSync, mkdirSync, appendFileSync, constants } from 'fs'

import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'

import { addItem, removeItem, updateItem } from './basicArrayOperations'
import { ESyncActions, TSyncMethodsArgs } from '../globalTypes/synchronization.types'
import { IReminderItem } from '../globalTypes/reminders.types'

const appDataPath = `${os.homedir()}\\Documents\\DontYouMind`
const dbFileName = 'db.json'

const fullDbPath = `${appDataPath}\\${dbFileName}`

export const synchronizeStoreAtMain = ({ action, payload }: TSyncMethodsArgs) => {
  try {
    accessSync(appDataPath, constants.R_OK | constants.W_OK)
  } catch (error) {
    console.error(error)
    try {
      mkdirSync(appDataPath, { recursive: true })
      appendFileSync(fullDbPath, JSON.stringify([]))
    } catch (createError) {
      console.error('createError:', createError)
    }
  }

  const adapter = new JSONFileSync<Array<IReminderItem>>(fullDbPath)

  const db = new LowSync<Array<IReminderItem>>(adapter, [])

  db.read()

  if (action === ESyncActions.ADD) db.data = addItem<IReminderItem>(db.data, payload)
  if (action === ESyncActions.REMOVE) db.data = removeItem<IReminderItem>(db.data, payload)
  if (action === ESyncActions.UPDATE) db.data = updateItem<IReminderItem>(db.data, payload)

  db.write()
}
