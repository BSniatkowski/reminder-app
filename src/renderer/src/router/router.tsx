import { createHashRouter } from 'react-router-dom'

import { MainPage } from '@renderer/components/pages/MainPage/MainPage'
import { PopupPage } from '@renderer/components/pages/PopupPage/PopupPage'
import { Layout } from '@renderer/components/templates/Layout/Layout'
import { SettingsPage } from '@renderer/components/pages/SettingsPage/SettingsPage'

export const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/settings',
        element: <SettingsPage />
      },
      {
        path: '/about',
        element: <div>About</div>
      }
    ]
  },
  {
    path: '/popup/:id',
    element: <PopupPage />
  }
])
