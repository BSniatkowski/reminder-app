import { FieldValues, useController } from 'react-hook-form'
import * as S from './SelectInput.style'
import { ISelectInputProps } from './SelectInput.types'
import { Label } from '@renderer/components/atoms/Label/Label'

export const SelectInput = <T extends FieldValues>({
  name,
  control,
  label,
  isVisible
}: ISelectInputProps<T>) => {
  const { field } = useController({ name, control })

  return (
    isVisible && (
      <S.SelectInputWrapper>
        {label && <Label asPlaceholder={!field.value} label={label} />}
        <S.SelectedItem />
      </S.SelectInputWrapper>
    )
  )
}
