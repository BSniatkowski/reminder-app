import { css } from 'styled-components'

export const typographyCSS = css`
  *,
  body,
  html {
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    box-sizing: border-box;
    color: ${({ theme }) => theme.palette.simple.text};
  }

  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 4.2rem;
  }

  h3 {
    font-size: 3.2rem;
  }

  h4 {
    font-size: 2.4rem;
  }

  h5 {
    font-size: 1.6rem;
  }

  h6 {
    font-size: 1.2rem;
  }
`
