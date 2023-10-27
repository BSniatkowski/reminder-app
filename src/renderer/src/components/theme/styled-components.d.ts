import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      simple: {
        primary: string
        secondary: string
        disabled: string
        hover: string
        text: string
        textDark: string
        delete: string
        blue: string
        white: string
        black: string
      }
      background: {
        primary: string
        secondary: string
      }
      gradients: {
        section: string
        overlay: string
        gloss: string
      }
    }
    borderRadius: {
      primary: number
      secondary: number
    }
    boxShadow: {
      primary: string
      secondary: string
    }
  }
}
