import { Label } from '@renderer/components/atoms/Label/Label'
import { FieldValues, useController } from 'react-hook-form'
import { EActivePickers, IDatePickerProps } from './DatePicker.types'

import * as S from './DatePicker.style'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { Calendar } from './components/Calendar/Calendar'
import { useCallback, useMemo, useState } from 'react'
import { Clock } from './components/Clock/Clock'
import { EButtonSizes } from '@renderer/components/atoms/Button/Button.types'

export const DatePicker = <T extends FieldValues>({
  name,
  control,
  label,
  isVisible
}: IDatePickerProps<T>) => {
  const { field } = useController({ name, control })

  const [isCalendarVisible, setIsCalendarVisible] = useState(false)
  const [isClockVisible, setIsClockVisible] = useState(false)

  const toggleCalendar = useCallback(() => {
    setIsCalendarVisible(!isCalendarVisible)
    setIsClockVisible(false)
  }, [isCalendarVisible, setIsCalendarVisible, setIsClockVisible])

  const toggleClock = useCallback(() => {
    setIsClockVisible(!isClockVisible)
    setIsCalendarVisible(false)
  }, [isClockVisible, setIsCalendarVisible, setIsClockVisible])

  const activePicker = useMemo(
    () =>
      isCalendarVisible
        ? EActivePickers.calendar
        : isClockVisible
        ? EActivePickers.clock
        : EActivePickers.none,
    [isCalendarVisible, isClockVisible]
  )

  return (
    isVisible && (
      <S.DatePickerWrapper>
        {label && <Label asPlaceholder={!field.value} label={label} />}
        <S.SDatePicker {...field} readOnly />
        <S.DatePickerButtonsWrapper $activePicker={activePicker}>
          <Button
            size={EButtonSizes.small}
            onClick={toggleCalendar}
            iconVariant={EIconVariants.CALENDAR}
          />
          <Button
            size={EButtonSizes.small}
            onClick={toggleClock}
            iconVariant={EIconVariants.CLOCK}
          />
        </S.DatePickerButtonsWrapper>
        <Calendar
          name={field.name}
          date={field.value}
          isVisible={isCalendarVisible}
          onMouseLeave={() => setIsCalendarVisible(false)}
        />
        <Clock
          name={field.name}
          date={field.value}
          isVisible={isClockVisible}
          onMouseLeave={() => setIsClockVisible(false)}
        />
      </S.DatePickerWrapper>
    )
  )
}
