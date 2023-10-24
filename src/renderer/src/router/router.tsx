import { createHashRouter } from 'react-router-dom'

import { MainPage } from '@renderer/components/pages/MainPage.tsx/MainPage'
import { PopupPage } from '@renderer/components/pages/PopupPage.tsx/PopupPage'
import { Layout } from '@renderer/components/templates/Layout/Layout'

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
        element: <div>Settings</div>
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
