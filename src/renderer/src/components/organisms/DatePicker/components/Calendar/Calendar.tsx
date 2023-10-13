import { Button } from '@renderer/components/atoms/Button/Button'
import { EButtonSizes, EButtonVariants } from '@renderer/components/atoms/Button/Button.types'
import { useCallback, useMemo, useState } from 'react'

import {
  format,
  getDaysInMonth,
  getDate,
  addMonths,
  isThisMonth as DFnsIsThisMonth,
  isSameMonth,
  set,
  getHours,
  getMinutes,
  getSeconds,
  startOfMonth,
  getDay
} from 'date-fns'
import locale from 'date-fns/esm/locale/en-GB'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { useTheme } from 'styled-components'
import { EDateFormats } from '@enums/date.enums'
import { twoWayDateFormat } from '@utils/twoWayDateFormat'

import * as S from './Calendar.style'
import { IDateWidgetProps } from '../Shared.types'
import { useFormContext } from 'react-hook-form'
import { ETileContentDirections } from '@renderer/components/atoms/Tile/Tile.types'

export const Calendar = ({ name, date, isVisible, onMouseLeave }: IDateWidgetProps) => {
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
    () => [...Array(getDaysInMonth(currentDate)).keys()],
    [currentDate]
  )

  const selectedDayInMonth = useMemo(() => getDate(selectedDate), [selectedDate])

  const weekdays = useMemo(() => {
    const [first, ...rest] = [...Array(7).keys()].map(
      (i) => locale?.localize?.day(i, { width: 'abbreviated' })
    )

    return [...rest, first]
  }, [])

  const emptyDaysElements = useMemo(() => {
    const firstWeekdayOfMonth = getDay(startOfMonth(currentDate))

    return [...Array(firstWeekdayOfMonth === 0 ? 6 : firstWeekdayOfMonth - 1).keys()]
  }, [currentDate])

  const previousMonth = useCallback(() => {
    setCurrentDate(addMonths(currentDate, -1))
  }, [currentDate, setCurrentDate])

  const nextMonth = useCallback(() => {
    setCurrentDate(addMonths(currentDate, 1))
  }, [currentDate, setCurrentDate])

  const updateSelectedDate = useCallback(
    (day: number) => {
      const actualTime = new Date()

      const time =
        day === actualDayInMonth
          ? {
              hours: getHours(actualTime),
              minutes: getMinutes(actualTime),
              seconds: getSeconds(actualTime)
            }
          : { hours: 12, minutes: 0, seconds: 0 }

      const newDate = twoWayDateFormat(set(currentDate, { date: day, ...time }))

      setValue(name, newDate)
    },
    [actualDayInMonth, currentDate, setValue, name]
  )

  return (
    <S.CalendarWidgetWrapper
      onMouseLeave={onMouseLeave}
      $contentDirection={ETileContentDirections.column}
      $isVisible={isVisible}
    >
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
      <S.WeekdaysWrapper>
        {weekdays.map((dayShort) => (
          <S.DayShort key={dayShort}>{dayShort}</S.DayShort>
        ))}
      </S.WeekdaysWrapper>
      <S.DaysWrapper>
        {emptyDaysElements.map((_, index) => (
          <S.EmptyDayElement key={index} />
        ))}
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
    </S.CalendarWidgetWrapper>
  )
}
