import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { TSyncMethodsArgs } from '../globalTypes/synchronization.types'
import { getStoreAtMain } from '../utils/synchronizeStore'

// Custom APIs for renderer
const api = {
  synchronizeReminders: (args: TSyncMethodsArgs) => {
    ipcRenderer.send('synchronize-reminders', args)
  },
  handleSynchronizeReminders: (callback: (args: TSyncMethodsArgs) => void) => {
    ipcRenderer.on('synchronize-reminders', (_, args) => callback(args))
  },
  askForState: () => {
    ipcRenderer.send('ask-for-state')
  },
  handleAskForState: (callback: (args: boolean) => void) => {
    ipcRenderer.on('ask-for-state', (_, args) => callback(args))
  },
  toggleMaximizeWindow: () => {
    ipcRenderer.send('toggle-maximize-window')
  },
  minimizeWindow: () => {
    ipcRenderer.send('minimize-window')
  },
  closeWindow: () => {
    ipcRenderer.send('close-window')
  }
}

const storeFromMain = getStoreAtMain()

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('storeFromMain', storeFromMain)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
  // @ts-ignore (define in dts)
  window.storeFromMain = storeFromMain
}
