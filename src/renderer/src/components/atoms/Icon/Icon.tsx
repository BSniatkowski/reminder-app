import { ReactComponent as AddIcon } from '@icons/add.svg'
import { ReactComponent as EditIcon } from '@icons/edit.svg'
import { ReactComponent as NotificationIcon } from '@icons/notification.svg'
import { ReactComponent as HomeIcon } from '@icons/home.svg'
import { ReactComponent as CalendarIcon } from '@icons/calendar.svg'
import { ReactComponent as StatsIcon } from '@icons/stats.svg'
import { ReactComponent as SettingsIcon } from '@icons/settings.svg'
import { ReactComponent as InfoIcon } from '@icons/info.svg'
import { ReactComponent as PreviewIcon } from '@icons/preview.svg'

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
  [EIconVariants.PREVIEW]: PreviewIcon
}

export const Icon: React.FC<IIconProps> = ({ variant, size, isActive, color, activeColor }) => {
  const IconComponent = iconsMap[variant] || AddIcon

  return (
    <S.IconOverrideWrapper
      $size={size}
      $isActive={isActive}
      $color={color}
      $activeColor={activeColor}
    >
      <IconComponent />
    </S.IconOverrideWrapper>
  )
}
