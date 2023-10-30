import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components'
import { GlobalStyle } from './GlobalStyle/GlobalStyle'
import { useSelector } from 'react-redux'
import { selectTheme } from '@renderer/store/storeSlices/settingsSlice/settingsSlice.selectors'
import { useMemo } from 'react'
import { EThemes } from '../organisms/SettingsForm/SettingsForm.types'

const themeLight: DefaultTheme = {
  palette: {
    simple: {
      primary: '#238CD8',
      secondary: '#53ACED',
      disabled: '#9ECAEA',
      hover: '#9CC1DC',
      text: '#E3E3E3',
      textDark: '#6C6C6C',
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
  boxShadow: {
    primary: '2px 4px 8px 0px rgba(0, 0, 0, 0.25)',
    secondary: '0 0 8px 0px rgba(0, 0, 0, 0.25)'
  }
}

const themeDark: DefaultTheme = {
  palette: {
    simple: {
      primary: '#0066AF',
      secondary: '#004171',
      disabled: '#747C82',
      hover: '#005490',
      text: '#E3E3E3',
      textDark: '#6C6C6C',
      delete: '#C61A10',
      blue: '#24B0FF',
      white: '#fff',
      black: '#000'
    },
    background: {
      primary: '#090909',
      secondary: '#171717'
    },
    gradients: {
      section: 'linear-gradient(180deg, #171717 0%, #090909 100%)',
      overlay: 'linear-gradient(270deg, #000 0%, rgba(0, 0, 0, 0.50) 100%)',
      gloss:
        'linear-gradient(121deg, rgba(255, 255, 255, 0.00) 67.59%, rgba(255, 255, 255, 0.32) 73.81%)'
    }
  },
  borderRadius: {
    primary: 1,
    secondary: 0.5
  },
  boxShadow: {
    primary: '2px 4px 8px 0px rgba(0, 0, 0, 0.25)',
    secondary: '0 0 8px 0px rgba(0, 0, 0, 0.25)'
  }
}

const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const themeVariant = useSelector(selectTheme)

  const theme = useMemo(
    () => ({ [EThemes.light]: themeLight, [EThemes.dark]: themeDark })[themeVariant],
    [themeVariant]
  )

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider
