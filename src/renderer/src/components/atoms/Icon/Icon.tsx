import { ReactComponent as AddIcon } from '@assets/icons/add.svg'
import { ReactComponent as EditIcon } from '@assets/icons/edit.svg'
import { ReactComponent as NotificationIcon } from '@assets/icons/notification.svg'
import { ReactComponent as HomeIcon } from '@assets/icons/home.svg'
import { ReactComponent as CalendarIcon } from '@assets/icons/calendar.svg'
import { ReactComponent as StatsIcon } from '@assets/icons/stats.svg'
import { ReactComponent as SettingsIcon } from '@assets/icons/settings.svg'
import { ReactComponent as InfoIcon } from '@assets/icons/info.svg'
import { ReactComponent as PreviewIcon } from '@assets/icons/preview.svg'
import { ReactComponent as CodeIcon } from '@assets/icons/code.svg'
import { ReactComponent as GithubIcon } from '@assets/icons/github.svg'
import { ReactComponent as ArrRightIcon } from '@assets/icons/arr_right.svg'
import { ReactComponent as ArrLeftIcon } from '@assets/icons/arr_left.svg'
import { ReactComponent as ClockIcon } from '@assets/icons/clock.svg'
import { ReactComponent as DeleteIcon } from '@assets/icons/delete.svg'
import { ReactComponent as PostponeIcon } from '@assets/icons/postpone.svg'
import { ReactComponent as DoneIcon } from '@assets/icons/done.svg'
import { ReactComponent as CloseIcon } from '@assets/icons/close.svg'
import { ReactComponent as SMinimizeIcon } from '@assets/icons/screen_minimize.svg'
import { ReactComponent as SFullIcon } from '@assets/icons/screen_full.svg'
import { ReactComponent as SSmallIcon } from '@assets/icons/screen_small.svg'

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
