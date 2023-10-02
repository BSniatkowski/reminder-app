import { css } from 'styled-components'

const minWidth = 350
const maxWidth = 1920
export const minFontSize = 12
export const maxFontsize = 16

export const typographyCSS = css`
  *,
  body,
  html {
    font-family: 'Roboto', sans-serif;
    font-size: ${minFontSize}px;
    box-sizing: border-box;

    @media screen and (min-width: ${minWidth}px) {
      font-size: calc(
        ${minFontSize}px + (${maxFontsize} - ${minFontSize}) *
          ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
      );
    }

    @media screen and (min-width: ${maxWidth}px) {
      font-size: ${maxFontsize}px;
    }
  }

  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  h4 {
    font-size: 2rem;
  }

  h5 {
    font-size: 1.6rem;
  }

  h6 {
    font-size: 1.2rem;
  }
`
