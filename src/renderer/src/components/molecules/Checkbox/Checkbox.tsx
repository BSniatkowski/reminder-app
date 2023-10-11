import { FieldValues, useController, useFormContext } from 'react-hook-form'
import * as S from './Checkbox.style'
import { ICheckboxProps } from './Checkbox.types'
import { Label } from '@renderer/components/atoms/Label/Label'
import { useCallback } from 'react'

export const Checkbox = <T extends FieldValues>({ label, ...props }: ICheckboxProps<T>) => {
  const { field } = useController(props)

  const { setValue } = useFormContext()

  const toggleCheckbox = useCallback(
    // @ts-expect-error Checked it in useForm docs and there is no any logical reason behind this error
    () => setValue(field.name, !field.value),
    [field.name, field.value, setValue]
  )

  return (
    <S.CheckboxWrapper $disabled={field.disabled} onClick={toggleCheckbox}>
      {label && <Label asPlaceholder label={label} />}
      <S.CheckboxTile $isActive={field.value} />
    </S.CheckboxWrapper>
  )
}
