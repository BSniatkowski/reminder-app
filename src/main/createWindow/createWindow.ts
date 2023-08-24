import { is } from '@electron-toolkit/utils'
import { BrowserWindow, shell, screen } from 'electron'
import { join } from 'path'

import icon from '../../../resources/icon.png?asset'

const popupSize = { height: 300, width: 400 }

export const createWindow: (isPopup?: boolean, id?: string) => void = (isPopup, id) => {
  const displayDetails = screen.getPrimaryDisplay()

  const popupPosition = {
    x: displayDetails.workArea.width - popupSize.width,
    y: 0
  }

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    ...(isPopup
      ? {
          ...popupPosition,
          ...popupSize,
          resizable: false,
          frame: false,
          transparent: true
        }
      : {
          height: 720,
          width: 1080
        }),
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    mainWindow.webContents.openDevTools({ mode: isPopup ? 'detach' : 'right' })
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(`${process.env['ELECTRON_RENDERER_URL']}${isPopup ? `/popup/${id}` : ''}`)
  } else {
    mainWindow.loadFile(
      join(__dirname, '../renderer/index.html'),
      isPopup
        ? {
            query: { isPopup: JSON.stringify(isPopup), id: JSON.stringify(id) }
          }
        : {}
    )
  }
}
