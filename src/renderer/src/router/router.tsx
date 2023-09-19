import { createHashRouter } from 'react-router-dom'

import { MainPage } from '@renderer/components/pages/MainPage.tsx/MainPage'
import { PopupPage } from '@renderer/components/pages/PopupPage.tsx/PopupPage'
import { Layout } from '@renderer/components/templates/Layout/Layout'
import { ReminderPage } from '@renderer/components/pages/ReminderPreviewPage/ReminderPreviewPage'
import { ReminderEditPage } from '@renderer/components/pages/ReminderEditPage/ReminderEditPage'
import { ReminderLoader } from '@renderer/components/pages/loaders/Reminder.loader'

export const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/reminder/:id',
        element: <ReminderPage />,
        loader: ReminderLoader
      },
      {
        path: '/reminder/:id/edit',
        element: <ReminderEditPage />,
        loader: ReminderLoader
      },
      {
        path: '/popup/:id',
        element: <PopupPage />
      }
    ]
  }
])
