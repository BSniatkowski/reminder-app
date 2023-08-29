import * as S from './Button.style'
import { IButton } from './Button.types'

export const Button: React.FC<IButton> = ({ variant, size, disabled, text, onClick }) => {
  return (
    <S.ButtonWrapper $variant={variant} $size={size} $disabled={disabled} onClick={onClick}>
      <span>{text}</span>
    </S.ButtonWrapper>
  )
}
