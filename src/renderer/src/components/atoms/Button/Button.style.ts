import { css, styled } from 'styled-components'
import { EButtonSizes, EButtonVariants, IButtonWrapperProps } from './Button.types'

export const ButtonWrapper = styled.div<IButtonWrapperProps>`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  border: ${({ theme }) => theme.border.primary};
  user-select: none;
  transition-property: box-shadow, background-color, color, border-color, filter;
  transition-duration: 100ms;

  & > * {
    text-align: center;
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      pointer-events: none;
      opacity: 0.25;
    `}

  ${({ $size = EButtonSizes.normal, theme }) =>
    ({
      [EButtonSizes.small]: css`
        height: fit-content;
        width: fit-content;
        padding: ${theme.spacing.small / 2}rem ${theme.spacing.small}rem;
        border-radius: ${theme.borderRadius.secondary}rem;
        font-size: 0.9rem;
      `,
      [EButtonSizes.normal]: css`
        width: fit-content;
        padding: ${theme.spacing.normal / 2}rem ${theme.spacing.normal}rem;
        border-radius: ${theme.borderRadius.primary}rem;
      `,
      [EButtonSizes.full]: css`
        width: 100%;
        padding: ${theme.spacing.big / 2}rem ${theme.spacing.big}rem;
        border-radius: ${theme.borderRadius.primary}rem;
      `
    })[$size]}

  ${({ $variant = EButtonVariants.normal, theme }) =>
    ({
      [EButtonVariants.normal]: css`
        color: ${theme.palette.white};
        background-color: ${theme.palette.primary};
        box-shadow: ${theme.boxShadow.heavy};

        &:hover {
          color: ${theme.palette.primary};
          background-color: ${theme.palette.secondary};
          border-color: ${theme.palette.secondary};
          box-shadow: 0 0 0 lightgray;
        }
      `,
      [EButtonVariants.light]: css`
        color: ${theme.palette.primary};

        &:hover {
          color: ${theme.palette.white};
          background-color: ${theme.palette.hover};
        }
      `,
      [EButtonVariants.roundTransparent]: css`
        background-color: transparent;
        border-radius: 50%;
        border: none;
        padding: ${({ theme }) => theme.spacing.small}rem;

        &:hover {
          background-color: ${theme.palette.secondary}85;
          box-shadow: 0 0 1rem 0.5rem ${theme.palette.secondary}85;
        }
      `,
      [EButtonVariants.remove]: css`
        color: ${theme.palette.white};
        background-color: ${theme.palette.alert.primary};
        border-color: ${theme.palette.alert.primary};

        &:hover {
          color: ${theme.palette.white};
          background-color: ${theme.palette.alert.hover};
          border-color: ${theme.palette.alert.hover};
        }
      `
    })[$variant]}
`
