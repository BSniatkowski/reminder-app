import * as S from './Clock.style'
import * as SharedS from '../Shared.style'
import { IDateWidgetProps } from '../Shared.types'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { twoWayDateFormat } from '@utils/twoWayDateFormat'
import { getTimePartArray } from '../../utils/getTimePartArray'

import { ETimeParts, TScrollClockTo } from './Clock.types'
import { scrollToElementInsideParent } from '../../utils/scrollToElementInsideParent'
import { getHours, getMinutes, getSeconds, set } from 'date-fns'
import { getActualVisibleListElement } from '../../utils/getActualVisibleListElement'
import { useFormContext } from 'react-hook-form'
import { formatTo2Digits } from '../../utils/formatTo2Digits'

export const Clock = ({ name, date, isVisible }: IDateWidgetProps) => {
  const time = useMemo(() => twoWayDateFormat(date), [date])
  const { setValue } = useFormContext()

  const hours = getTimePartArray(ETimeParts.hours)
  const minutes = getTimePartArray(ETimeParts.minutes)
  const seconds = getTimePartArray(ETimeParts.seconds)

  const itemSize = 5

  const hoursNodesRefs = useRef<Map<string, HTMLElement>>()

  const getRefsMap = useCallback(() => {
    if (!hoursNodesRefs.current) {
      hoursNodesRefs.current = new Map()
    }

    return hoursNodesRefs.current
  }, [])

  const scrollClockTo = useCallback<TScrollClockTo>(
    ({ hour, minute, second }) => {
      scrollToElementInsideParent({
        elementId: `${ETimeParts.hours}${hour}`,
        refsMap: getRefsMap()
      })
      scrollToElementInsideParent({
        elementId: `${ETimeParts.minutes}${minute}`,
        refsMap: getRefsMap()
      })
      scrollToElementInsideParent({
        elementId: `${ETimeParts.seconds}${second}`,
        refsMap: getRefsMap()
      })
    },
    [getRefsMap]
  )

  const onMouseLeave = useCallback(() => {
    const hour = getActualVisibleListElement({
      refsMap: getRefsMap(),
      mandatoryId: ETimeParts.hours
    })?.replace(ETimeParts.hours, '')

    const minute = getActualVisibleListElement({
      refsMap: getRefsMap(),
      mandatoryId: ETimeParts.minutes
    })?.replace(ETimeParts.minutes, '')

    const second = getActualVisibleListElement({
      refsMap: getRefsMap(),
      mandatoryId: ETimeParts.seconds
    })?.replace(ETimeParts.seconds, '')

    const newTime = twoWayDateFormat(
      set(time, { hours: Number(hour), minutes: Number(minute), seconds: Number(second) })
    )

    setValue(name, newTime)
  }, [getRefsMap, name, setValue, time])

  useEffect(() => {
    const actualDate = twoWayDateFormat(date)

    const initialClock = {
      hour: formatTo2Digits(getHours(actualDate)),
      minute: formatTo2Digits(getMinutes(actualDate)),
      second: formatTo2Digits(getSeconds(actualDate))
    }

    if (isVisible) scrollClockTo(initialClock)
  }, [date, isVisible, scrollClockTo])

  return (
    <SharedS.DateWidgetWrapper $isVisible={isVisible} onMouseLeave={onMouseLeave}>
      <S.Slider $itemSize={itemSize}>
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
      <S.Slider $itemSize={itemSize}>
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
      <S.Slider $itemSize={itemSize}>
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
    </SharedS.DateWidgetWrapper>
  )
}
