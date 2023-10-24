import { css } from 'styled-components'

export const scrollbarCSS = css`
  *::-webkit-scrollbar {
    --size: 1rem;
    height: var(--size);
    width: var(--size);
  }

  *::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.palette.simple.hover};
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  *::-webkit-scrollbar-thumb {
    border: solid 0.5rem ${({ theme }) => theme.palette.simple.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.secondary}rem;
  }

  *:hover {
    &::-webkit-scrollbar-thumb {
      border-color: ${({ theme }) => theme.palette.simple.blue};
    }
  }
`
