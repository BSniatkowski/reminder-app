import * as S from './Button.style'
import { EButtonSizes, IButtonProps } from './Button.types'
import { Icon } from '../Icon/Icon'
import { EIconSizes } from '../Icon/Icon.types'

export const Button: React.FC<IButtonProps> = ({
  variant,
  size = EButtonSizes.normal,
  disabled,
  text,
  iconVariant,
  onClick
}) => {
  const iconSize = {
    [EButtonSizes.big]: EIconSizes.normal,
    [EButtonSizes.normal]: EIconSizes.normal,
    [EButtonSizes.small]: EIconSizes.small
  }[size]

  return (
    <S.ButtonWrapper $variant={variant} $size={size} $disabled={disabled} onClick={onClick}>
      {iconVariant && <Icon variant={iconVariant} size={iconSize} />}
      {text}
    </S.ButtonWrapper>
  )
}
