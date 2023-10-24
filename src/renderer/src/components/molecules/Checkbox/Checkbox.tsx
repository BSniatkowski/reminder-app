import { FieldValues, useController, useFormContext } from 'react-hook-form'
import * as S from './Checkbox.style'
import { ICheckboxProps } from './Checkbox.types'
import { Label } from '@renderer/components/atoms/Label/Label'
import { useCallback } from 'react'

export const Checkbox = <T extends FieldValues>({
  label,
  isVisible,
  ...props
}: ICheckboxProps<T>) => {
  const { field } = useController(props)

  const { setValue } = useFormContext()

  const toggleCheckbox = useCallback(
    // @ts-expect-error Checked it in useForm docs and there is no any logical reason behind this error
    () => setValue(field.name, !field.value),
    [field.name, field.value, setValue]
  )

  return (
    isVisible && (
      <S.CheckboxWrapper
        $isActive={field.value}
        $disabled={field.disabled}
        onClick={toggleCheckbox}
      >
        <S.CheckboxTile />
        {label && <Label asPlaceholder label={label} />}
      </S.CheckboxWrapper>
    )
  )
}
