export enum EIconVariants {
  ADD = 'add',
  EDIT = 'edit',
  NOTIFICATION = 'notification'
}

export interface IIconProps {
  variant: EIconVariants
  size?: string
  isActive?: boolean
  color?: string
  activeColor?: string
}

export interface IconOverrideWrapperProps {
  $size?: string
  $isActive?: boolean
  $color?: string
  $activeColor?: string
}
