import { css, styled } from 'styled-components'
import { EButtonSizes, EButtonVariants, IButtonWrapperProps } from './Button.types'

export const ButtonWrapper = styled.div<IButtonWrapperProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  user-select: none;

  transition: background-color 50ms ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.palette.simple.hover};
  }

  ${({ $disabled }) =>
    $disabled
      ? css`
          background-color: ${({ theme }) => theme.palette.simple.disabled};
          pointer-events: none;
        `
      : css`
          background-color: ${({ theme }) => theme.palette.simple.primary};
          box-shadow: ${({ theme }) => theme.boxShadow.primary};
        `}

  ${({ $size = EButtonSizes.normal }) =>
    ({
      [EButtonSizes.xsmall]: css``,
      [EButtonSizes.small]: css`
        padding: 0.7rem;
        border-radius: ${({ theme }) => theme.borderRadius.secondary}rem;
      `,
      [EButtonSizes.normal]: css`
        padding: 1.7rem;
        border-radius: ${({ theme }) => theme.borderRadius.primary}rem;
      `,
      [EButtonSizes.big]: css`
        padding: 0.7rem 2.8rem;
        border-radius: ${({ theme }) => theme.borderRadius.secondary}rem;
      `
    })[$size]}

  ${({ $variant = EButtonVariants.normal }) =>
    ({
      [EButtonVariants.normal]: css``,
      [EButtonVariants.transparent]: css`
        background: none;
        box-shadow: none;
        width: fit-content;

        &:hover {
          background: none;
        }
      `,
      [EButtonVariants.remove]: css`
        background-color: ${({ theme }) => theme.palette.simple.delete};
      `
    })[$variant]}
`
