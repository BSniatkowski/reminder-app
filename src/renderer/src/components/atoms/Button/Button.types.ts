import { EIconVariants } from '../Icon/Icon.types'

export enum EButtonVariants {
  normal,
  light,
  roundTransparent,
  remove
}

export enum EButtonSizes {
  small,
  normal,
  full
}

export interface IButtonProps {
  variant?: EButtonVariants
  size?: EButtonSizes
  disabled?: boolean
  withoutDecoration?: boolean
  text?: string
  iconVariant?: EIconVariants
  iconColor?: string
  iconActiveColor?: string
  onClick: () => void
}

export interface IButtonWrapperProps {
  $variant?: EButtonVariants
  $size?: EButtonSizes
  $disabled?: boolean
}
