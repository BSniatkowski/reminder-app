import { FieldValues, useController, useFormContext, PathValue, Path } from 'react-hook-form'
import * as S from './SelectInput.style'
import { ISelectInputProps } from './SelectInput.types'
import { Label } from '@renderer/components/atoms/Label/Label'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export const SelectInput = <T extends FieldValues>({
  name,
  control,
  label,
  options,
  isVisible
}: ISelectInputProps<T>) => {
  const { setValue } = useFormContext<T>()
  const { field } = useController({ name, control })

  const optionsRef = useRef<null | HTMLDivElement>(null)

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

  const [dynamicPosition, setDynamicPosition] = useState<React.CSSProperties>({})

  const checkOptionsVisibility = useCallback(() => {
    if (!optionsRef.current) return

    const { innerHeight, innerWidth } = window
    const elementSize = {
      height: optionsRef.current?.clientHeight,
      width: optionsRef.current?.clientWidth
    }
    const elementPosition = {
      x: optionsRef.current?.getBoundingClientRect()?.left,
      y: optionsRef.current?.getBoundingClientRect()?.top
    }

    setDynamicPosition({
      top:
        elementPosition.y + elementSize.height < innerHeight
          ? 'calc(100% + 0.5rem)'
          : `calc(100% - (${elementPosition.y + elementSize.height - innerHeight}px + 1rem))`,
      left:
        elementPosition.x + elementSize.width < innerWidth
          ? 0
          : -(elementPosition.x + elementSize.width - innerWidth)
    })
  }, [])

  useEffect(() => {
    checkOptionsVisibility()
  }, [checkOptionsVisibility, isCollapsed])

  useEffect(() => {
    window.addEventListener('resize', checkOptionsVisibility)

    return () => window.removeEventListener('resize', checkOptionsVisibility)
  }, [checkOptionsVisibility])

  return (
    isVisible && (
      <S.SelectInputWrapper>
        {label && <Label asPlaceholder={!field.value} label={label} />}
        <S.SelectedItem $isCollapsed={isCollapsed} onClick={toggleIsCollapsed}>
          {selectedItemLabel}
        </S.SelectedItem>
        <S.Options
          style={dynamicPosition}
          ref={optionsRef}
          $isCollapsed={isCollapsed}
          onMouseLeave={() => setIsCollapsed(true)}
        >
          {options.map(({ id, label }) => (
            <S.OptionItem onClick={() => onOptionItemClick(id as PathValue<T, Path<T>>)} key={id}>
              {label}
            </S.OptionItem>
          ))}
        </S.Options>
      </S.SelectInputWrapper>
    )
  )
}
