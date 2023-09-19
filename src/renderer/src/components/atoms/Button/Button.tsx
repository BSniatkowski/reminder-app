import { useState } from 'react'
import { Text } from '../Text/Text'
import * as S from './Button.style'
import { EButtonSizes, IButtonProps } from './Button.types'
import { Decoration } from '../Decoration/Decoration'
import { useTheme } from 'styled-components'
import { Icon } from '../Icon/Icon'

export const Button: React.FC<IButtonProps> = ({
  variant,
  size,
  disabled,
  withoutDecoration,
  text,
  iconVariant,
  iconColor,
  iconActiveColor,
  onClick
}) => {
  const {
    palette: { primary }
  } = useTheme()
  const [isHovered, seIsHovered] = useState(false)

  return (
    <S.ButtonWrapper
      $variant={variant}
      $size={size}
      $disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => {
        seIsHovered(true)
      }}
      onMouseLeave={() => {
        seIsHovered(false)
      }}
    >
      {text && <Text>{text}</Text>}
      {isHovered && !variant && !withoutDecoration && <Decoration animate color={primary} />}
      {iconVariant && (
        <Icon
          variant={iconVariant}
          size={size === EButtonSizes.small ? '1rem' : '2.4rem'}
          isActive={isHovered}
          color={iconColor}
          activeColor={iconActiveColor}
        />
      )}
    </S.ButtonWrapper>
  )
}
