import { css, styled } from 'styled-components'
import { EButtonSizes, EButtonVariants, IButtonWrapperProps } from './Button.types'

export const ButtonWrapper = styled.div<IButtonWrapperProps>`
  cursor: pointer;
  user-select: none;

  ${({ $size = EButtonSizes.normal }) =>
    ({
      [EButtonSizes.small]: css``,
      [EButtonSizes.normal]: css``,
      [EButtonSizes.full]: css``
    })[$size]}

  ${({ $variant = EButtonVariants.normal }) =>
    ({
      [EButtonVariants.normal]: css``,
      [EButtonVariants.light]: css``,
      [EButtonVariants.roundTransparent]: css``,
      [EButtonVariants.remove]: css``
    })[$variant]}
`
