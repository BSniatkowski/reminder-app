import { is } from '@electron-toolkit/utils'
import { BrowserWindow, shell, screen } from 'electron'
import { join } from 'path'

import icon from '../../../resources/icon.png?asset'

const popupSize = { height: 360, width: 640 }
const popupSizeSmall = { height: 80, width: 640 }

export const createWindow: (args?: { id?: string; small?: boolean }) => void = (args) => {
  const id = args?.id
  const small = args?.small

  const displayDetails = screen.getPrimaryDisplay()

  const popupPosition = {
    x: displayDetails.workArea.width - popupSize.width,
    y: 30
  }

  // Create the browser window.
  const window = new BrowserWindow({
    ...(id
      ? {
          ...popupPosition,
          ...(small ? popupSizeSmall : popupSize),
          resizable: false,
          frame: false,
          transparent: true,
          alwaysOnTop: true
        }
      : {
          minHeight: 740,
          minWidth: 640,
          height: 1080,
          width: 1920,
          frame: false
        }),
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  if (id) {
    window.once('focus', () => window.flashFrame(false))
    window.flashFrame(true)
  }

  window.on('ready-to-show', () => {
    window.show()
    if (import.meta.env.DEV) window.webContents.openDevTools({ mode: id ? 'detach' : 'right' })
  })

  window.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    window.loadURL(`${process.env['ELECTRON_RENDERER_URL']}${id ? `#/popup/${id}` : ''}`)
  } else {
    window.loadFile(
      join(__dirname, '../renderer/index.html'),
      id
        ? {
            hash: `/popup/${id}`
          }
        : {}
    )
  }
}
