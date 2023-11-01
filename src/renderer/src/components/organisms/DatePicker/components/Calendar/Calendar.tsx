import { Button } from '@renderer/components/atoms/Button/Button'
import { EButtonSizes } from '@renderer/components/atoms/Button/Button.types'
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
import localeEN from 'date-fns/esm/locale/en-GB'
import localePL from 'date-fns/esm/locale/pl'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { EDateFormats } from '@enums/date.enums'
import { twoWayDateFormat } from '@utils/twoWayDateFormat'

import * as S from './Calendar.style'
import { IDateWidgetProps } from '../Shared.types'
import { useFormContext } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { selectLanguage } from '@renderer/store/storeSlices/settingsSlice/settingsSlice.selectors'
import { ELocales } from '@renderer/store/storeSlices/settingsSlice/settingsSlice.types'

export const Calendar = ({ name, date, isVisible, onMouseLeave }: IDateWidgetProps) => {
  const { setValue } = useFormContext()

  const currentLanguage = useSelector(selectLanguage)

  const [currentDate, setCurrentDate] = useState(twoWayDateFormat(date))
  const selectedDate = useMemo(() => twoWayDateFormat(date), [date])

  const locale = useMemo(
    () => ({ [ELocales.en]: localeEN, [ELocales.pl]: localePL })[currentLanguage],
    [currentLanguage]
  )

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
  }, [locale?.localize])

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
    <S.CalendarWidgetWrapper onMouseLeave={onMouseLeave} $isVisible={isVisible}>
      <S.DateWrapper>
        <Button
          onClick={previousMonth}
          disabled={isThisMonth}
          iconVariant={EIconVariants.ARR_LEFT}
          size={EButtonSizes.xsmall}
        />
        {format(currentDate, EDateFormats.yearAndMonth)}
        <Button
          onClick={nextMonth}
          iconVariant={EIconVariants.ARR_RIGHT}
          size={EButtonSizes.xsmall}
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
          <S.DayElement
            key={day}
            $isSelected={selectedDayInMonth === day + 1 && isSameMonthAsSelected}
            $disabled={isThisMonth && day + 1 < actualDayInMonth}
            onClick={() => updateSelectedDate(day + 1)}
          >
            {day + 1}
          </S.DayElement>
        ))}
      </S.DaysWrapper>
    </S.CalendarWidgetWrapper>
  )
}
