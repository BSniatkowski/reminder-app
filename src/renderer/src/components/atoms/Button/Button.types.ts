import { EIconVariants } from '../Icon/Icon.types'

export enum EButtonVariants {
  normal,
  remove
}

export enum EButtonSizes {
  small,
  normal,
  big
}

export interface IButtonProps {
  variant?: EButtonVariants
  size?: EButtonSizes
  disabled?: boolean
  withoutDecoration?: boolean
  text?: React.ReactNode
  iconVariant?: EIconVariants
  onClick: () => void
}

export interface IButtonWrapperProps {
  $variant?: EButtonVariants
  $size?: EButtonSizes
  $disabled?: boolean
}
