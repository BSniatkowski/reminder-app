import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux'
import { store } from './store/store'
import ThemeProvider from './components/theme/theme'
import Router from './router/router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>
)
