import { Text } from '../Text/Text'
import * as S from './Button.style'
import { EButtonSizes, IButtonProps } from './Button.types'
import { Icon } from '../Icon/Icon'

export const Button: React.FC<IButtonProps> = ({
  variant,
  size,
  disabled,
  text,
  iconVariant,
  onClick
}) => {
  return (
    <S.ButtonWrapper $variant={variant} $size={size} $disabled={disabled} onClick={onClick}>
      {text && <Text nowrap>{text}</Text>}
      {iconVariant && (
        <Icon variant={iconVariant} size={size === EButtonSizes.small ? '1.6rem' : '2.4rem'} />
      )}
    </S.ButtonWrapper>
  )
}
