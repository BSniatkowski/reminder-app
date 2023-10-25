import { EIconVariants } from '../Icon/Icon.types'

export enum EButtonVariants {
  normal,
  transparent,
  remove
}

export enum EButtonSizes {
  xsmall,
  small,
  normal,
  big
}

export interface IButtonProps {
  variant?: EButtonVariants
  size?: EButtonSizes
  disabled?: boolean
  text?: React.ReactNode
  iconVariant?: EIconVariants
  onClick: () => void
}

export interface IButtonWrapperProps {
  $variant?: EButtonVariants
  $size?: EButtonSizes
  $disabled?: boolean
}
