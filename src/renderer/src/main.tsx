import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux'
import { store } from './store/store'
import ThemeProvider from './components/theme/theme'
import { router } from './router/router'
import { RouterProvider } from 'react-router-dom'
import { IntlProvider } from './providers/IntlProvider/IntlProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <IntlProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </IntlProvider>
    </StoreProvider>
  </React.StrictMode>
)
