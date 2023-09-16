import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components'
import { GlobalStyle } from './GlobalStyle/GlobalStyle'

const primary = '#14213d'
const secondary = '#e5e5e5'

const theme: DefaultTheme = {
  palette: {
    primary,
    secondary,
    hover: '#1E325C',
    link: '#fca311',
    white: '#fff',
    black: '#000',
    warning: '#ECA72C',
    error: '#EE5622'
  },
  spacing: {
    small: 0.6,
    normal: 1,
    big: 1.25
  },
  border: {
    primary: `0.1rem solid ${primary}`,
    secondary: `0.2rem solid ${primary}`
  },
  borderRadius: {
    primary: 0.25,
    secondary: 0.15
  },
  boxShadow: {
    light: `0.2rem 0.2rem 0.5rem ${secondary}`,
    heavy: `0.1rem 0.1rem 0.2rem ${secondary}`
  }
}

const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </StyledThemeProvider>
)

export default ThemeProvider
