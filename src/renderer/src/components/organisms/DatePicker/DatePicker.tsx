import { Label } from '@renderer/components/atoms/Label/Label'
import { FieldValues, useController } from 'react-hook-form'
import { IDatePickerProps } from './DatePicker.types'

import * as S from './DatePicker.style'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EButtonVariants } from '@renderer/components/atoms/Button/Button.types'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { useTheme } from 'styled-components'
import { Calendar } from './components/Calendar/Calendar'
import { useCallback, useState } from 'react'
import { Clock } from './components/Clock/Clock'

export const DatePicker = <T extends FieldValues>({ label, ...props }: IDatePickerProps<T>) => {
  const { field } = useController(props)

  const {
    palette: { primary }
  } = useTheme()

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

  return (
    <S.DatePickerWrapper>
      {label && <Label asPlaceholder={!field.value} label={label} />}
      <S.SDatePicker {...field} readOnly />
      <S.DatePickerButtonsWrapper>
        <Button
          variant={EButtonVariants.roundTransparent}
          onClick={toggleCalendar}
          iconVariant={EIconVariants.CALENDAR}
          iconColor={primary}
          iconActiveColor={primary}
        />
        <Button
          variant={EButtonVariants.roundTransparent}
          onClick={toggleClock}
          iconVariant={EIconVariants.CLOCK}
          iconColor={primary}
          iconActiveColor={primary}
        />
      </S.DatePickerButtonsWrapper>
      <Calendar name={field.name} date={field.value} isVisible={isCalendarVisible} />
      <Clock name={field.name} date={field.value} isVisible={isClockVisible} />
    </S.DatePickerWrapper>
  )
}
