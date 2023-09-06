import { createGlobalStyle } from 'styled-components'
import { fontFaceCSS } from './fontFaceCSS'
import { typographyCSS } from './typographyCSS'
import { resetCSS } from './resetCSS'
import { scrollbar } from './scrollbar'

export const GlobalStyle = createGlobalStyle`
  ${resetCSS}
  ${fontFaceCSS}
  ${typographyCSS}
  ${scrollbar}
`
