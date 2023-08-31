import { Text } from '../Text/Text'
import * as S from './Button.style'
import { IButtonProps } from './Button.types'

export const Button: React.FC<IButtonProps> = ({ variant, size, disabled, text, onClick }) => {
  return (
    <S.ButtonWrapper $variant={variant} $size={size} $disabled={disabled} onClick={onClick}>
      <Text>{text}</Text>
    </S.ButtonWrapper>
  )
}
