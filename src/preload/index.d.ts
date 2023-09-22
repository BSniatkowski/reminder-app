import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      openPopup: (id: string) => void
      synchronizeReminders: (payload: unknown) => void // TODO
      closeWindow: () => void
    }
  }
}
