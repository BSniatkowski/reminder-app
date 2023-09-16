export enum EIconVariants {
  ADD = 'add',
  EDIT = 'edit',
  NOTIFICATION = 'notification',
  HOME = 'home',
  CALENDAR = 'calendar',
  STATS = 'stats',
  SETTINGS = 'settings',
  INFO = 'info',
  PREVIEW = 'preview',
  CODE = 'code',
  GITHUB = 'github',
  ARR_RIGHT = 'arr_right',
  ARR_LEFT = 'arr_left',
  CLOCK = 'clock'
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
