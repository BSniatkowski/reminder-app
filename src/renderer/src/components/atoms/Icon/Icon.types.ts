export enum EIconVariants {
  ADD = 'add',
  EDIT = 'edit',
  NOTIFICATION = 'notification'
}

export interface IIconProps {
  variant: EIconVariants
  height?: string
  isActive?: boolean
  color?: string
  activeColor?: string
}

export interface IconOverrideWrapperProps {
  $height?: string
  $isActive?: boolean
  $color?: string
  $activeColor?: string
}
