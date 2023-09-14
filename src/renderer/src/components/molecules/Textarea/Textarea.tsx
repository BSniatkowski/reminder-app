import { Label } from '@renderer/components/atoms/Label/Label'
import * as S from './Textarea.style'
import { useController } from 'react-hook-form'
import { TTextarea } from './Textarea.types'

export const Textarea: TTextarea = ({ label, ...props }) => {
  const { field } = useController(props)

  return (
    <S.TextareaWrapper>
      {label && <Label asPlaceholder={!field.value} label={label} />}
      <S.STextarea {...field} />
    </S.TextareaWrapper>
  )
}
