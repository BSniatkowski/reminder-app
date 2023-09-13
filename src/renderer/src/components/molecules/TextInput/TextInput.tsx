import { useController } from 'react-hook-form'
import * as S from './TextInput.style'
import { TTextInput } from './TextInput.types'

export const TextInput: TTextInput = ({ label, ...props }) => {
  const { field } = useController(props)

  return (
    <S.TextInputWrapper>
      {label && <S.Label>{label}</S.Label>}
      <S.STextInput {...field} />
    </S.TextInputWrapper>
  )
}
