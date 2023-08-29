import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      background: {
        primary: string
        secondary: string
        third: string
      }
      font: {
        primary: string
        secondary: string
        link: string
      }
      white: string
      black: string
      warning: string
      error: string
    }
    spacing: {
      small: number
      normal: number
      big: number
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
