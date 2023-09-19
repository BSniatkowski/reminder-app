import * as S from './Clock.style'
import * as SharedS from '../Shared.style'
import { IDateWidgetProps } from '../Shared.types'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { twoWayDateFormat } from '@renderer/utils/twoWayDateFormat'
import { getTimePartArray } from '../../utils/getTimePartArray'

import { ETimeParts } from './Clock.types'
import { scrollToElementInsideParent } from '../../utils/scrollToElementInsideParent'
import { set } from 'date-fns'
import { getActualVisibleListElement } from '../../utils/getActualVisibleListElement'
import { useFormContext } from 'react-hook-form'

export const Clock = ({ name, date, isVisible }: IDateWidgetProps) => {
  const time = useMemo(() => twoWayDateFormat(date), [date])
  const { setValue } = useFormContext()

  const [hours, setHours] = useState<Array<string>>([])
  const [minutes, setMinutes] = useState<Array<string>>([])
  const [seconds, setSeconds] = useState<Array<string>>([])

  const itemSize = 3

  const hoursNodesRefs = useRef<Map<string, HTMLElement>>()

  const getRefsMap = useCallback(() => {
    if (!hoursNodesRefs.current) {
      hoursNodesRefs.current = new Map()
    }

    return hoursNodesRefs.current
  }, [])

  type TScrollClockTo = ({
    hour,
    minute,
    second
  }: {
    hour: number
    minute: number
    second: number
  }) => void

  const scrollClockTo = useCallback<TScrollClockTo>(
    ({ hour, minute, second }) => {
      scrollToElementInsideParent({ elementId: `H${hour}`, refsMap: getRefsMap() })
      scrollToElementInsideParent({ elementId: `M${minute}`, refsMap: getRefsMap() })
      scrollToElementInsideParent({ elementId: `S${second}`, refsMap: getRefsMap() })
    },
    [getRefsMap]
  )

  const onMouseLeave = useCallback(() => {
    const hour = Number(
      getActualVisibleListElement({ refsMap: getRefsMap(), mandatoryId: 'H' })?.replace('H', '')
    )
    const minute = Number(
      getActualVisibleListElement({ refsMap: getRefsMap(), mandatoryId: 'M' })?.replace('M', '')
    )
    const second = Number(
      getActualVisibleListElement({ refsMap: getRefsMap(), mandatoryId: 'S' })?.replace('S', '')
    )

    scrollClockTo({ hour, minute, second })

    const newTime = twoWayDateFormat(set(time, { hours: hour, minutes: minute, seconds: second }))

    setValue(name, newTime)
  }, [getRefsMap, name, scrollClockTo, setValue, time])

  useEffect(() => {
    const actualDate = new Date()

    const newHours = getTimePartArray({
      time,
      timePart: ETimeParts.hours,
      actualDate,
      defaulNumber: 24
    })

    const newMinutes = getTimePartArray({
      time,
      timePart: ETimeParts.minutes,
      actualDate,
      defaulNumber: 60
    })

    const newSeconds = getTimePartArray({
      time,
      timePart: ETimeParts.seconds,
      actualDate,
      defaulNumber: 60
    })

    setHours(newHours)
    setMinutes(newMinutes)
    setSeconds(newSeconds)
  }, [time])

  return (
    <SharedS.DateWidgetWrapper $isVisible={isVisible} onMouseLeave={onMouseLeave}>
      <S.Slider $itemSize={itemSize}>
        {hours.map((hour) => (
          <S.SliderItem
            key={hour}
            ref={(node) => {
              const map = getRefsMap()

              if (node) {
                map.set(`H${hour}`, node)
              } else {
                map.delete(`H${hour}`)
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
                map.set(`M${minute}`, node)
              } else {
                map.delete(`M${minute}`)
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
                map.set(`S${second}`, node)
              } else {
                map.delete(`S${second}`)
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
