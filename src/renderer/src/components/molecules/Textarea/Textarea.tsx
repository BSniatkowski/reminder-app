import { Label } from '@renderer/components/atoms/Label/Label'
import * as S from './Textarea.style'
import { FieldValues, useController } from 'react-hook-form'
import { ITextareaProps } from './Textarea.types'

export const Textarea = <T extends FieldValues>({
  label,
  isVisible,
  ...props
}: ITextareaProps<T>) => {
  const { field } = useController(props)

  return (
    isVisible && (
      <S.TextareaWrapper>
        {label && <Label asPlaceholder={!field.value} label={label} />}
        <S.STextarea {...field} />
      </S.TextareaWrapper>
    )
  )
}
