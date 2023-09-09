import { css } from 'styled-components'

export const scrollbarCSS = css`
  ::-webkit-scrollbar {
    --size: 0.5rem;
    height: var(--size);
    width: var(--size);
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.palette.secondary};
  }

  ::-webkit-scrollbar-thumb {
    border: solid 0.5rem ${({ theme }) => theme.palette.primary};
    border-radius: ${({ theme }) => theme.borderRadius.primary}rem;
  }
`
