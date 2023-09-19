import styled, { css } from 'styled-components'
import { ISLabelProps } from './Label.types'

export const SLabel = styled.label<ISLabelProps>`
  position: absolute;
  pointer-events: none;
  line-height: 1.7rem;
  transition-property: font-size, top;
  transition-duration: 100ms;
  left: ${({ theme }) => theme.spacing.normal * 1.5}rem;
  top: 0;

  ${({ theme, $asPlaceholder }) =>
    $asPlaceholder
      ? css`
          font-size: 1.4rem;
          top: ${theme.spacing.normal * 1.5 + 1.4}rem;
        `
      : css`
          font-size: 1.2rem;
          top: ${theme.spacing.normal / 2}rem;
        `}
`
