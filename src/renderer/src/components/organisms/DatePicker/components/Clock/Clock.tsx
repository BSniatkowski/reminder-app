import * as S from './Clock.style'
import { IDateWidgetProps } from '../Shared.types'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { twoWayDateFormat } from '@utils/twoWayDateFormat'
import { getTimePartArray } from '../../utils/getTimePartArray'

import {
  ETimeParts,
  TOnInputBlur,
  TOnInputChange,
  TOnMouseLeaveSlider,
  TScrollClockTo
} from './Clock.types'
import { scrollToElementInsideParent } from '../../utils/scrollToElementInsideParent'
import { getHours, getMinutes, getSeconds, set } from 'date-fns'
import { getActualVisibleListElement } from '../../utils/getActualVisibleListElement'
import { useFormContext } from 'react-hook-form'
import { formatTo2Digits } from '../../utils/formatTo2Digits'

export const Clock = ({ name, date, isVisible, onMouseLeave }: IDateWidgetProps) => {
  const { setValue } = useFormContext()

  const time = useMemo(() => twoWayDateFormat(date), [date])

  const clockSimpleFormat = useMemo(
    () => ({
      hour: formatTo2Digits(getHours(time)),
      minute: formatTo2Digits(getMinutes(time)),
      second: formatTo2Digits(getSeconds(time))
    }),
    [time]
  )

  const hours = getTimePartArray(ETimeParts.hours)
  const minutes = getTimePartArray(ETimeParts.minutes)
  const seconds = getTimePartArray(ETimeParts.seconds)

  const itemSize = 5.4

  const hoursNodesRefs = useRef<Map<string, HTMLElement>>()

  const [activeInput, setActiveInput] = useState<null | ETimeParts>(null)

  const setDate = useCallback((value: string) => setValue(name, value), [name, setValue])

  const onInputChange = useCallback<TOnInputChange>((event) => {
    const target = event?.target

    if (!target) return

    target.value =
      Number(target?.value?.slice(0, 2)) <= Number(target.max)
        ? target?.value?.slice(0, 2)
        : target.max
  }, [])

  const getRefsMap = useCallback(() => {
    if (!hoursNodesRefs.current) {
      hoursNodesRefs.current = new Map()
    }

    return hoursNodesRefs.current
  }, [])

  const onInputBlur = useCallback<TOnInputBlur>(
    ({ timePart, value }) => {
      const formattedValue = Number(value.slice(0, 2))

      if (typeof formattedValue !== 'number') {
        setActiveInput(null)
        return
      }

      const changedTime = {
        [ETimeParts.hours]: { hours: formattedValue },
        [ETimeParts.minutes]: { minutes: formattedValue },
        [ETimeParts.seconds]: { seconds: formattedValue }
      }[timePart]

      const newTime = twoWayDateFormat(set(time, changedTime))

      setDate(newTime)
      setActiveInput(null)
    },
    [setDate, time]
  )

  const scrollClockTo = useCallback<TScrollClockTo>(
    ({ hour, minute, second }) => {
      scrollToElementInsideParent({
        elementId: `${ETimeParts.hours}${hour}`,
        refsMap: getRefsMap(),
        smooth: true
      })
      scrollToElementInsideParent({
        elementId: `${ETimeParts.minutes}${minute}`,
        refsMap: getRefsMap(),
        smooth: true
      })
      scrollToElementInsideParent({
        elementId: `${ETimeParts.seconds}${second}`,
        refsMap: getRefsMap(),
        smooth: true
      })
    },
    [getRefsMap]
  )

  const onMouseLeaveSlider = useCallback<TOnMouseLeaveSlider>(
    (timePart) => {
      const timeValue = getActualVisibleListElement({
        refsMap: getRefsMap(),
        mandatoryId: timePart
      })?.replace(timePart, '')

      if (!timeValue) return

      const newTimeProp = {
        [ETimeParts.hours]: { hours: Number(timeValue) },
        [ETimeParts.minutes]: { minutes: Number(timeValue) },
        [ETimeParts.seconds]: { seconds: Number(timeValue) }
      }[timePart]

      const newTime = twoWayDateFormat(set(time, newTimeProp))

      setDate(newTime)
    },
    [getRefsMap, setDate, time]
  )

  useEffect(() => {
    if (isVisible && activeInput === null) scrollClockTo(clockSimpleFormat)
  }, [time, isVisible, scrollClockTo, clockSimpleFormat, activeInput])

  return (
    <S.ClockWidgetWrapper $isVisible={isVisible} onMouseLeave={onMouseLeave}>
      {activeInput === ETimeParts.hours && (
        <S.SliderItemInput
          autoFocus
          $itemSize={itemSize}
          defaultValue={clockSimpleFormat.hour}
          max={23}
          onChange={onInputChange}
          onBlur={(event) =>
            onInputBlur({ timePart: ETimeParts.hours, value: event?.target?.value })
          }
        />
      )}
      <S.Slider
        $display={activeInput !== ETimeParts.hours}
        $itemSize={itemSize}
        onMouseLeave={() => onMouseLeaveSlider(ETimeParts.hours)}
        onClick={() => setActiveInput(ETimeParts.hours)}
      >
        {hours.map((hour) => (
          <S.SliderItem
            key={hour}
            ref={(node) => {
              const map = getRefsMap()

              if (node) {
                map.set(`${ETimeParts.hours}${hour}`, node)
              } else {
                map.delete(`${ETimeParts.hours}${hour}`)
              }
            }}
          >
            {hour}
          </S.SliderItem>
        ))}
      </S.Slider>
      {activeInput === ETimeParts.minutes && (
        <S.SliderItemInput
          autoFocus
          $itemSize={itemSize}
          defaultValue={clockSimpleFormat.minute}
          max={59}
          onChange={onInputChange}
          onBlur={(event) =>
            onInputBlur({ timePart: ETimeParts.minutes, value: event?.target?.value })
          }
        />
      )}
      <S.Slider
        $display={activeInput !== ETimeParts.minutes}
        $itemSize={itemSize}
        onMouseLeave={() => onMouseLeaveSlider(ETimeParts.minutes)}
        onClick={() => setActiveInput(ETimeParts.minutes)}
      >
        {minutes.map((minute) => (
          <S.SliderItem
            key={minute}
            ref={(node) => {
              const map = getRefsMap()

              if (node) {
                map.set(`${ETimeParts.minutes}${minute}`, node)
              } else {
                map.delete(`${ETimeParts.minutes}${minute}`)
              }
            }}
          >
            {minute}
          </S.SliderItem>
        ))}
      </S.Slider>
      {activeInput === ETimeParts.seconds && (
        <S.SliderItemInput
          autoFocus
          $itemSize={itemSize}
          defaultValue={clockSimpleFormat.second}
          max={59}
          onChange={onInputChange}
          onBlur={(event) =>
            onInputBlur({ timePart: ETimeParts.seconds, value: event?.target?.value })
          }
        />
      )}
      <S.Slider
        $display={activeInput !== ETimeParts.seconds}
        $itemSize={itemSize}
        onMouseLeave={() => onMouseLeaveSlider(ETimeParts.seconds)}
        onClick={() => setActiveInput(ETimeParts.seconds)}
      >
        {seconds.map((second) => (
          <S.SliderItem
            key={second}
            ref={(node) => {
              const map = getRefsMap()

              if (node) {
                map.set(`${ETimeParts.seconds}${second}`, node)
              } else {
                map.delete(`${ETimeParts.seconds}${second}`)
              }
            }}
          >
            {second}
          </S.SliderItem>
        ))}
      </S.Slider>
    </S.ClockWidgetWrapper>
  )
}
