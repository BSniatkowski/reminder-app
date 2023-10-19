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
  CLOCK = 'clock',
  DELETE = 'delete',
  POSTPONE = 'postpone',
  DONE = 'done'
}

export enum EIconSizes {
  big = '6rem',
  normal = '4.6rem'
}

export interface IIconProps {
  variant: EIconVariants
  size?: EIconSizes
}

export interface IconOverrideWrapperProps {
  $size?: EIconSizes
}
