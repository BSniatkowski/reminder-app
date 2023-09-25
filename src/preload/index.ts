import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { TSyncMethodsArgs } from '../globalTypes/synchronization.types'

// Custom APIs for renderer
const api = {
  openPopup: (id: string) => {
    ipcRenderer.send('open-popup', id)
  },
  synchronizeReminders: (args: TSyncMethodsArgs) => {
    console.log(args)

    ipcRenderer.send('synchronize-reminders', args)
  },
  handleSynchronizeReminders: (callback: (args: TSyncMethodsArgs) => void) => {
    ipcRenderer.on('synchronize-reminders', (_, args) => callback(args))
  },
  closeWindow: () => {
    ipcRenderer.send('close-window')
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
