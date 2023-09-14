import { useController } from 'react-hook-form'
import * as S from './TextInput.style'
import { TTextInput } from './TextInput.types'
import { Label } from '@renderer/components/atoms/Label/Label'

export const TextInput: TTextInput = ({ label, ...props }) => {
  const { field } = useController(props)

  return (
    <S.TextInputWrapper>
      {label && <Label asPlaceholder={!field.value} label={label} />}
      <S.STextInput {...field} />
    </S.TextInputWrapper>
  )
}
