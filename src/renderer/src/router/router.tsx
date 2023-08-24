import { MainPage } from '@renderer/components/pages/MainPage.tsx/MainPage'
import { loader as MainPageLoader } from '@renderer/components/pages/MainPage.tsx/MainPage.loader'
import { PopupPage } from '@renderer/components/pages/PopupPage.tsx/PopupPage'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    loader: MainPageLoader
  },
  {
    path: '/popup/:id',
    element: <PopupPage />
  }
])

export default router
