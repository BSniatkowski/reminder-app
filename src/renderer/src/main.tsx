import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux'
import { store } from './store/store'
import ThemeProvider from './providers/theme/theme'
import { router } from './router/router'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>
)
