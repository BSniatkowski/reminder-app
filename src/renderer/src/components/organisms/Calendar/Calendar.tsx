import { Button } from '@renderer/components/atoms/Button/Button'
import * as S from './Calendar.style'
import { EButtonSizes, EButtonVariants } from '@renderer/components/atoms/Button/Button.types'
import { useCallback, useMemo, useState } from 'react'

import {
  format,
  getDaysInMonth,
  getDate,
  addMonths,
  isThisMonth as DFnsIsThisMonth
} from 'date-fns'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { useTheme } from 'styled-components'

export const Calendar = ({ date, isActive }) => {
  const {
    palette: { primary, white }
  } = useTheme()

  const [currentMonth, setCurrentMonth] = useState(new Date())

  const today = useMemo(() => getDate(new Date()), [])
  const isThisMonth = useMemo(() => DFnsIsThisMonth(currentMonth), [currentMonth])

  const currentMonthDays = useMemo(
    () => new Array(getDaysInMonth(currentMonth)).fill(1),
    [currentMonth]
  )

  const previousMonth = useCallback(() => {
    setCurrentMonth(addMonths(currentMonth, -1))
  }, [currentMonth, setCurrentMonth])

  const nextMonth = useCallback(() => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }, [currentMonth, setCurrentMonth])

  return (
    <S.CalendarWrapper>
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
        {format(currentMonth, 'yyyy-MM')}
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
              today === day + 1 && isThisMonth ? EButtonVariants.normal : EButtonVariants.light
            }
            disabled={isThisMonth && day + 1 < today}
            withoutDecoration
            onClick={() => console.log(day)}
            text={`${day + 1}`}
          />
        ))}
      </S.DaysWrapper>
    </S.CalendarWrapper>
  )
}
