import { IReminderItem } from './reminders.types'

export enum ESyncActions {
  ADD = 'add',
  REMOVE = 'remove',
  UPDATE = 'update'
}

export type TSyncMethodsArgs =
  | { action: ESyncActions.ADD; payload: IReminderItem }
  | { action: ESyncActions.REMOVE; payload: string }
  | { action: ESyncActions.UPDATE; payload: IReminderItem }
