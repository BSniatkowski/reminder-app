import { FieldValues, useController } from 'react-hook-form'
import * as S from './TextInput.style'
import { ITextInputProps } from './TextInput.types'
import { Label } from '@renderer/components/atoms/Label/Label'

export const TextInput = <T extends FieldValues>({ label, ...props }: ITextInputProps<T>) => {
  const { field } = useController(props)

  return (
    <S.TextInputWrapper>
      {label && <Label asPlaceholder={!field.value} label={label} />}
      <S.STextInput {...field} />
    </S.TextInputWrapper>
  )
}
