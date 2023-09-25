import { ElectronAPI } from '@electron-toolkit/preload'

import { ISyncMethodsArgs } from '@globalTypes/synchronization.types'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      openPopup: (id: string) => void
      synchronizeReminders: (args: ISyncMethodsArgs) => void
      handleSynchronizeReminders: (callback: (args: ISyncMethodsArgs) => void) => void
      closeWindow: () => void
    }
  }
}
