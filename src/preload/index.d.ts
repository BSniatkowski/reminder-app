import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      createPopup: () => void
      closeWindow: () => void
    }
  }
}
