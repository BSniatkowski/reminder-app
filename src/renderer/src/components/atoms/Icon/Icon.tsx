import { ReactComponent as AddIcon } from '@icons/add.svg'
import { ReactComponent as EditIcon } from '@icons/edit.svg'
import { ReactComponent as NotificationIcon } from '@icons/notification.svg'

import { EIconVariants, IIconProps } from './Icon.types'
import * as S from './Icon.style'

const iconsMap = {
  [EIconVariants.ADD]: AddIcon,
  [EIconVariants.EDIT]: EditIcon,
  [EIconVariants.NOTIFICATION]: NotificationIcon
}

export const Icon: React.FC<IIconProps> = ({ variant, height, isActive, color, activeColor }) => {
  const IconComponent = iconsMap[variant] || AddIcon

  return (
    <S.IconOverrideWrapper
      $height={height}
      $isActive={isActive}
      $color={color}
      $activeColor={activeColor}
    >
      <IconComponent />
    </S.IconOverrideWrapper>
  )
}
