import { createGlobalStyle } from 'styled-components'
import { fontFaceCSS } from './fontFaceCSS'
import { typographyCSS } from './typographyCSS'
import { resetCSS } from './resetCSS'
import { scrollbarCSS } from './scrollbarCSS'

export const GlobalStyle = createGlobalStyle`
  ${resetCSS}
  ${fontFaceCSS}
  ${typographyCSS}
  ${scrollbarCSS}
`
