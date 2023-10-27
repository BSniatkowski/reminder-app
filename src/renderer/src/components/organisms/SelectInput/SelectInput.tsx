import { FieldValues, useController, useFormContext, PathValue, Path } from 'react-hook-form'
import * as S from './SelectInput.style'
import { ISelectInputProps } from './SelectInput.types'
import { Label } from '@renderer/components/atoms/Label/Label'
import { useCallback, useMemo, useState } from 'react'
import { VisibilityChecker } from '@renderer/components/atoms/VisibilityChecker/VisibilityChecker'

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

  const toggleIsCollapsed = useCallback(() => setIsCollapsed(!isCollapsed), [isCollapsed])

  return (
    isVisible && (
      <S.SelectInputWrapper>
        {label && <Label asPlaceholder={!field.value} label={label} />}
        <S.SelectedItem $isCollapsed={isCollapsed} onClick={toggleIsCollapsed}>
          {selectedItemLabel}
        </S.SelectedItem>
        <VisibilityChecker>
          <S.Options $isCollapsed={isCollapsed} onMouseLeave={() => setIsCollapsed(true)}>
            {options.map(({ id, label }) => (
              <S.OptionItem onClick={() => onOptionItemClick(id as PathValue<T, Path<T>>)} key={id}>
                {label}
              </S.OptionItem>
            ))}
          </S.Options>
        </VisibilityChecker>
      </S.SelectInputWrapper>
    )
  )
}
