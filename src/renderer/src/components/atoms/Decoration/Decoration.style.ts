import styled, { css, keyframes } from 'styled-components'
import { EDecorationSizes, IDecorationDivProps } from './Decoration.types'
import { DefaultTheme } from 'styled-components/dist/types'

const pulseTopRight = (theme: DefaultTheme) => keyframes`
  0% {
    top: ${theme.spacing.small * 0.5}rem;
    left: ${theme.spacing.small * 0.5}rem;
  }
  50% {
    top: ${theme.spacing.small}rem;
    left: ${theme.spacing.small}rem;
  }
  100% {
    top: ${theme.spacing.small * 0.5}rem;
    left: ${theme.spacing.small * 0.5}rem;
  }
`

const pulseBottomLeft = (theme: DefaultTheme) => keyframes`
  0% {
    bottom: ${theme.spacing.small * 0.5}rem;
    right: ${theme.spacing.small * 0.5}rem;
  }
  50% {
    bottom: ${theme.spacing.small}rem;
    right: ${theme.spacing.small}rem;
  }
  100% {
    bottom: ${theme.spacing.small * 0.5}rem;
    right: ${theme.spacing.small * 0.5}rem;
  }
`

export const DecorationDiv = styled.div<IDecorationDivProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border: ${({ theme }) => theme.border.secondary};
    ${({ $color }) =>
      $color &&
      css`
        border-color: ${$color};
      `}

    ${({ $size = EDecorationSizes.normal, theme }) =>
      ({
        [EDecorationSizes.small]: css`
          width: ${theme.spacing.small * 0.7}rem;
          height: ${theme.spacing.small * 0.7}rem;
        `,
        [EDecorationSizes.normal]: css`
          width: ${theme.spacing.normal}rem;
          height: ${theme.spacing.normal}rem;
        `
      })[$size]}
  }

  &::before {
    top: ${({ theme }) => theme.spacing.small}rem;
    left: ${({ theme }) => theme.spacing.small}rem;
    border-bottom: none;
    border-right: none;
    border-top-left-radius: ${({ theme }) => theme.borderRadius.primary}rem;
    ${({ $animate, theme }) =>
      $animate &&
      css`
        animation: 1s ${pulseTopRight(theme)} linear infinite;
      `}
  }

  &::after {
    bottom: ${({ theme }) => theme.spacing.small}rem;
    right: ${({ theme }) => theme.spacing.small}rem;
    border-top: none;
    border-left: none;
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.primary}rem;

    ${({ $animate, theme }) =>
      $animate &&
      css`
        animation: 1s ${pulseBottomLeft(theme)} linear infinite;
      `}
  }
`
