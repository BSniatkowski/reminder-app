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
  DONE = 'done',
  CLOSE = 'close',
  MINIMIZE = 'minimize',
  RESIZE_SMALL = 'resize_small',
  RESIZE_FULL = 'resize_full'
}

export enum EIconSizes {
  large = '18.5rem',
  big = '6rem',
  normal = '4.6rem',
  small = '3.4rem',
  xsmall = '1.4rem'
}

export interface IIconProps {
  variant: EIconVariants
  size?: EIconSizes
}

export interface IconOverrideWrapperProps {
  $size?: EIconSizes
}
