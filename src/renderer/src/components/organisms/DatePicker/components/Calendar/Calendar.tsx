import { Button } from '@renderer/components/atoms/Button/Button'
import { EButtonSizes, EButtonVariants } from '@renderer/components/atoms/Button/Button.types'
import { useCallback, useEffect, useMemo, useState } from 'react'

import {
  format,
  getDaysInMonth,
  getDate,
  addMonths,
  isThisMonth as DFnsIsThisMonth,
  setDate,
  isSameMonth
} from 'date-fns'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { useTheme } from 'styled-components'
import { EDateFormats } from '@renderer/enums/date.enums'
import { twoWayDateFormat } from '@renderer/utils/twoWayDateFormat'

import * as SharedS from '../Shared.style'
import * as S from './Calendar.style'
import { IDateWidgetProps } from '../Shared.types'
import { useFormContext } from 'react-hook-form'

export const Calendar = ({ name, date, isVisible }: IDateWidgetProps) => {
  const { setValue } = useFormContext()

  const {
    palette: { primary, white }
  } = useTheme()

  const [currentDate, setCurrentDate] = useState(twoWayDateFormat(date))
  const selectedDate = useMemo(() => twoWayDateFormat(date), [date])

  const isSameMonthAsSelected = useMemo(
    () => isSameMonth(currentDate, selectedDate),
    [currentDate, selectedDate]
  )

  const isThisMonth = useMemo(() => DFnsIsThisMonth(currentDate), [currentDate])
  const actualDayInMonth = useMemo(() => getDate(new Date()), [])

  const currentMonthDays = useMemo(
    () => new Array(getDaysInMonth(currentDate)).fill(1),
    [currentDate]
  )

  const previousMonth = useCallback(() => {
    setCurrentDate(addMonths(currentDate, -1))
  }, [currentDate, setCurrentDate])

  const nextMonth = useCallback(() => {
    setCurrentDate(addMonths(currentDate, 1))
  }, [currentDate, setCurrentDate])

  const selectedDayInMonth = useMemo(() => getDate(selectedDate), [selectedDate])

  const updateSelectedDate = useCallback(
    (day: number) => {
      setValue(name, twoWayDateFormat(setDate(currentDate, day)))
    },
    [name, currentDate, setValue]
  )

  return (
    <SharedS.DateWidgetWrapper $isVisible={isVisible}>
      <S.DateWrapper>
        <Button
          size={EButtonSizes.small}
          onClick={previousMonth}
          disabled={isThisMonth}
          withoutDecoration
          iconVariant={EIconVariants.ARR_LEFT}
          iconColor={white}
          iconActiveColor={primary}
        />
        {format(currentDate, EDateFormats.yearAndMonth)}
        <Button
          size={EButtonSizes.small}
          onClick={nextMonth}
          withoutDecoration
          iconVariant={EIconVariants.ARR_RIGHT}
          iconColor={white}
          iconActiveColor={primary}
        />
      </S.DateWrapper>
      <S.DaysWrapper>
        {currentMonthDays.map((_, day) => (
          <Button
            key={day}
            variant={
              selectedDayInMonth === day + 1 && isSameMonthAsSelected
                ? EButtonVariants.normal
                : EButtonVariants.light
            }
            disabled={isThisMonth && day + 1 < actualDayInMonth}
            withoutDecoration
            onClick={() => updateSelectedDate(day + 1)}
            text={`${day + 1}`}
          />
        ))}
      </S.DaysWrapper>
    </SharedS.DateWidgetWrapper>
  )
}
