import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  palette: {
    background: {
      primary: '#437F97',
      secondary: '#01295F',
      third: '#E2EFF3'
    },
    font: {
      primary: '#01295F',
      secondary: '#437F97',
      link: '#28A470'
    },
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
  borderRadius: {
    primary: 0.4,
    secondary: 0.2
  },
  boxShadow: {
    light: '0.2rem 0.2rem 0.5rem lightgray',
    heavy: '0.1rem 0.1rem 0.2rem lightgray'
  }
}

const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
)

export default ThemeProvider
