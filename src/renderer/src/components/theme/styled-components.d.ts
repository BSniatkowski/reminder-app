import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: string
      secondary: string
      hover: string
      link: string
      white: string
      black: string
      warning: string
      alert: string
    }
    spacing: {
      small: number
      normal: number
      big: number
    }
    border: {
      primary: string
      secondary: string
    }
    borderRadius: {
      primary: number
      secondary: number
    }
    boxShadow: {
      light: string
      heavy: string
    }
  }
}
