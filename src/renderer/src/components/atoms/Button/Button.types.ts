export enum EButtonVariants {
  light,
  normal
}

export enum EButtonSizes {
  small,
  normal,
  full
}

export interface IButton {
  variant?: EButtonVariants
  size?: EButtonSizes
  disabled?: boolean
  text: string
  onClick: () => void
}

export interface IButtonWrapper {
  $variant?: EButtonVariants
  $size?: EButtonSizes
  $disabled?: boolean
}
