import { Text } from '../Text/Text'
import * as S from './Button.style'
import { EButtonSizes, IButtonProps } from './Button.types'
import { Icon } from '../Icon/Icon'
import { EIconSizes } from '../Icon/Icon.types'

export const Button: React.FC<IButtonProps> = ({
  variant,
  size,
  disabled,
  text,
  iconVariant,
  onClick
}) => {
  const iconSize = {
    [EButtonSizes.big]: EIconSizes.big,
    [EButtonSizes.normal]: EIconSizes.normal
  }[(size = EButtonSizes.normal)]

  return (
    <S.ButtonWrapper $variant={variant} $size={size} $disabled={disabled} onClick={onClick}>
      {text && <Text nowrap>{text}</Text>}
      {iconVariant && <Icon variant={iconVariant} size={iconSize} />}
    </S.ButtonWrapper>
  )
}
