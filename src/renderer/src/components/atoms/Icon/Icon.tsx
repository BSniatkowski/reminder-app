import AddIcon from '@assets/icons/add.svg?react'
import EditIcon from '@assets/icons/edit.svg?react'
import NotificationIcon from '@assets/icons/notification.svg?react'
import HomeIcon from '@assets/icons/home.svg?react'
import CalendarIcon from '@assets/icons/calendar.svg?react'
import StatsIcon from '@assets/icons/stats.svg?react'
import SettingsIcon from '@assets/icons/settings.svg?react'
import InfoIcon from '@assets/icons/info.svg?react'
import PreviewIcon from '@assets/icons/preview.svg?react'
import CodeIcon from '@assets/icons/code.svg?react'
import GithubIcon from '@assets/icons/github.svg?react'
import ArrRightIcon from '@assets/icons/arr_right.svg?react'
import ArrLeftIcon from '@assets/icons/arr_left.svg?react'
import ClockIcon from '@assets/icons/clock.svg?react'
import DeleteIcon from '@assets/icons/delete.svg?react'
import PostponeIcon from '@assets/icons/postpone.svg?react'
import DoneIcon from '@assets/icons/done.svg?react'
import CloseIcon from '@assets/icons/close.svg?react'
import SMinimizeIcon from '@assets/icons/screen_minimize.svg?react'
import SFullIcon from '@assets/icons/screen_full.svg?react'
import SSmallIcon from '@assets/icons/screen_small.svg?react'

import { EIconVariants, IIconProps } from './Icon.types'
import * as S from './Icon.style'

const iconsMap = {
  [EIconVariants.ADD]: AddIcon,
  [EIconVariants.EDIT]: EditIcon,
  [EIconVariants.NOTIFICATION]: NotificationIcon,
  [EIconVariants.HOME]: HomeIcon,
  [EIconVariants.CALENDAR]: CalendarIcon,
  [EIconVariants.STATS]: StatsIcon,
  [EIconVariants.SETTINGS]: SettingsIcon,
  [EIconVariants.INFO]: InfoIcon,
  [EIconVariants.PREVIEW]: PreviewIcon,
  [EIconVariants.CODE]: CodeIcon,
  [EIconVariants.GITHUB]: GithubIcon,
  [EIconVariants.ARR_RIGHT]: ArrRightIcon,
  [EIconVariants.ARR_LEFT]: ArrLeftIcon,
  [EIconVariants.CLOCK]: ClockIcon,
  [EIconVariants.DELETE]: DeleteIcon,
  [EIconVariants.POSTPONE]: PostponeIcon,
  [EIconVariants.DONE]: DoneIcon,
  [EIconVariants.CLOSE]: CloseIcon,
  [EIconVariants.MINIMIZE]: SMinimizeIcon,
  [EIconVariants.RESIZE_SMALL]: SSmallIcon,
  [EIconVariants.RESIZE_FULL]: SFullIcon
}

export const Icon: React.FC<IIconProps> = ({ variant, size }) => {
  const IconComponent = iconsMap[variant] || AddIcon

  return (
    <S.IconOverrideWrapper $size={size}>
      <IconComponent />
    </S.IconOverrideWrapper>
  )
}
