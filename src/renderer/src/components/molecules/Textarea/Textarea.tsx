import { Label } from '@renderer/components/atoms/Label/Label'
import * as S from './Textarea.style'
import { FieldValues, useController } from 'react-hook-form'
import { ITextareaProps } from './Textarea.types'

export const Textarea = <T extends FieldValues>({
  name,
  control,
  label,
  isVisible
}: ITextareaProps<T>) => {
  const { field } = useController({ name, control })

  return (
    isVisible && (
      <S.TextareaWrapper>
        {label && <Label asPlaceholder={!field.value} label={label} />}
        <S.STextarea {...field} />
      </S.TextareaWrapper>
    )
  )
}
