import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components'
import { GlobalStyle } from './GlobalStyle/GlobalStyle'

const theme: DefaultTheme = {
  palette: {
    simple: {
      primary: '#238CD8',
      secondary: '#53ACED',
      disabled: '#9ECAEA',
      hover: '#9CC1DC',
      text: '#E3E3E3',
      delete: '#ED574E',
      blue: '#24B0FF',
      white: '#fff',
      black: '#000'
    },
    background: {
      primary: '#F6FBFF',
      secondary: '#E8F2F9'
    },
    gradients: {
      section: 'linear-gradient(180deg, #E8F2F9 0%, #F6FBFF 100%)',
      overlay: 'linear-gradient(90deg, rgba(255, 255, 255, 0.50) 0%, #FFF 100%)',
      gloss:
        'linear-gradient(121deg, rgba(255, 255, 255, 0.00) 67.59%, rgba(255, 255, 255, 0.32) 73.81%)'
    }
  },
  borderRadius: {
    primary: 1,
    secondary: 0.5
  },
  boxShadow: '2px 4px 8px 0px rgba(0, 0, 0, 0.25)'
}

const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </StyledThemeProvider>
)

export default ThemeProvider
