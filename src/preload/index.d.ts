import { ElectronAPI } from '@electron-toolkit/preload'
import { IReminderItem } from '@globalTypes/reminders.types'

import { ISyncMethodsArgs } from '@globalTypes/synchronization.types'

declare global {
  interface Window {
    storeFromMain?: Array<IReminderItem>
    electron: ElectronAPI
    api: {
      synchronizeReminders: (args: ISyncMethodsArgs) => void
      handleSynchronizeReminders: (callback: (args: ISyncMethodsArgs) => void) => void
      askForState: () => void
      handleAskForState: (callback: (args: boolean) => void) => void
      toggleMaximizeWindow: () => void
      minimizeWindow: () => void
      closeWindow: () => void
    }
  }
}
