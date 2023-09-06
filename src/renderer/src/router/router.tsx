import { MainPage } from '@renderer/components/pages/MainPage.tsx/MainPage'
import { PopupPage } from '@renderer/components/pages/PopupPage.tsx/PopupPage'
import { Layout } from '@renderer/components/templates/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { EPaths } from './router.types'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={EPaths.PLANNER} element={<MainPage />} />
        <Route path={EPaths.STATS} element={<MainPage />} />
        <Route path={EPaths.SETTINGS} element={<MainPage />} />
        <Route path={EPaths.ABOUT} element={<MainPage />} />
      </Route>
      <Route path={EPaths.POPUP} element={<PopupPage />} />
    </Routes>
  </BrowserRouter>
)

export default Router
