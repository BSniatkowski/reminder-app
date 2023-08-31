export enum EButtonVariants {
  light,
  normal
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
  text: string
  onClick: () => void
}

export interface IButtonWrapperProps {
  $variant?: EButtonVariants
  $size?: EButtonSizes
  $disabled?: boolean
}
