import { ThemeProvider as StyledThemeProvider } from 'styled-components'

const theme = {
  palette: {
    background: {
      main: '#fff'
    },
    font: {
      main: '#000'
    }
  }
}

const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
)

export default ThemeProvider
