import { app, BrowserWindow, ipcMain, Menu, Tray } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { createWindow } from './createWindow/createWindow'
import { synchronizeStoreAtMain } from '../utils/synchronizeStore'

import electronLogoUrl from '../../resources/icon.png?asset'

Menu.setApplicationMenu(null)

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId(process.execPath)

  const tray = new Tray(electronLogoUrl)

  const menu = Menu.buildFromTemplate([
    {
      label: 'Open app GUI',
      click: () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      }
    },
    {
      label: 'Exit',
      click: () => {
        app.quit()
      }
    }
  ])

  tray.setTitle("Don't You Mind")
  tray.setToolTip('Your polite reminder app')
  tray.setContextMenu(menu)

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  setTimeout(() => createWindow(true, '1'), 5000) // just for routing testing purpose

  ipcMain.on('open-popup', (_, id) => {
    createWindow(true, id)
  })

  ipcMain.on('synchronize-reminders', (_, payload) => {
    synchronizeStoreAtMain(payload)
  })

  ipcMain.on('close-window', (event) => {
    event.sender.close()
  })

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  // if (process.platform !== 'darwin') {
  //   app.quit()
  // }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
