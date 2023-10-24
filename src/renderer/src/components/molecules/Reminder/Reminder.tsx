import { IReminderProps } from './Reminder.types'
import { Text } from '@renderer/components/atoms/Text/Text'
import { ETextTags } from '@renderer/components/atoms/Text/Text.types'
import * as S from './Reminder.style'
import { Icon } from '@renderer/components/atoms/Icon/Icon'
import { EIconSizes, EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { Gloss } from '@renderer/components/atoms/Gloss/Gloss'
import { useState } from 'react'

export const Reminder: React.FC<IReminderProps> = ({ title, date, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <S.ReminderWrapper
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <S.ReminderInsideWrapper>
        <S.ReminderIconTileWrapper>
          <Icon size={EIconSizes.big} variant={EIconVariants.NOTIFICATION} />
        </S.ReminderIconTileWrapper>
        <S.InfoWrapper>
          <Text as={ETextTags.h3}>{title}</Text>
          <Text as={ETextTags.h4}>{date}</Text>
        </S.InfoWrapper>
        {isHovered && <Gloss />}
      </S.ReminderInsideWrapper>
    </S.ReminderWrapper>
  )
}
