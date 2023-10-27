import { FieldValues, useController, useFormContext, PathValue, Path } from 'react-hook-form'
import * as S from './SelectInput.style'
import { ISelectInputProps } from './SelectInput.types'
import { Label } from '@renderer/components/atoms/Label/Label'
import { useCallback, useMemo, useState } from 'react'

export const SelectInput = <T extends FieldValues>({
  name,
  control,
  label,
  options,
  isVisible
}: ISelectInputProps<T>) => {
  const { setValue } = useFormContext<T>()
  const { field } = useController({ name, control })

  const [isCollapsed, setIsCollapsed] = useState(true)

  const selectedItemLabel = useMemo(
    () => options.find(({ id }) => id === field.value)?.label,
    [field.value, options]
  )

  const onOptionItemClick = useCallback(
    (id: PathValue<T, Path<T>>) => {
      setValue(field.name, id)
      setIsCollapsed(true)
    },
    [field.name, setValue]
  )

  return (
    isVisible && (
      <S.SelectInputWrapper>
        {label && <Label asPlaceholder={!field.value} label={label} />}
        <S.SelectedItem onClick={() => setIsCollapsed(false)}>{selectedItemLabel}</S.SelectedItem>
        <S.Options $isCollapsed={isCollapsed}>
          {options.map(({ id, label }) => (
            <S.OptionItem onClick={() => onOptionItemClick(id)} key={id}>
              {label}
            </S.OptionItem>
          ))}
        </S.Options>
      </S.SelectInputWrapper>
    )
  )
}
