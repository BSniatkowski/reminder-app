import styled, { css } from 'styled-components'
import { ISLabelProps } from './Label.types'

export const SLabel = styled.label<ISLabelProps>`
  position: absolute;
  pointer-events: none;
  line-height: 1.7rem;
  transition-property: font-size, top;
  transition-duration: 100ms;
  left: 0.4rem;
  top: 0;

  ${({ $asPlaceholder }) =>
    $asPlaceholder
      ? css`
          font-size: 2.4rem;
          top: 3rem;
        `
      : css`
          font-size: 1.2rem;
          top: 0.5rem;
        `}
`
