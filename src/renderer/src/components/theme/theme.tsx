import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components'
import { GlobalStyle } from './GlobalStyle/GlobalStyle'

const theme: DefaultTheme = {
  palette: {
    primary: '#14213d',
    secondary: '#e5e5e5',
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
    primary: '0.1rem solid #000',
    secondary: '0.2rem solid #000'
  },
  borderRadius: {
    primary: 0.25,
    secondary: 0.15
  },
  boxShadow: {
    light: '0.2rem 0.2rem 0.5rem lightgray',
    heavy: '0.1rem 0.1rem 0.2rem lightgray'
  }
}

const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </StyledThemeProvider>
)

export default ThemeProvider
