import * as S from './Clock.style'
import * as SharedS from '../Shared.style'
import { IDateWidgetProps } from '../Shared.types'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { twoWayDateFormat } from '@utils/twoWayDateFormat'
import { getTimePartArray } from '../../utils/getTimePartArray'

import { ETimeParts, TScrollClockTo } from './Clock.types'
import { scrollToElementInsideParent } from '../../utils/scrollToElementInsideParent'
import { getHours, getMinutes, getSeconds, set } from 'date-fns'
import { getActualVisibleListElement } from '../../utils/getActualVisibleListElement'
import { useFormContext } from 'react-hook-form'
import { formatTo2Digits } from '../../utils/formatTo2Digits'

export const Clock = ({ name, date, isVisible }: IDateWidgetProps) => {
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

  const itemSize = 5

  const hoursNodesRefs = useRef<Map<string, HTMLElement>>()

  const [activeInput, setActiveInput] = useState<null | ETimeParts>(null)

  type TOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => void

  const onInputChange = useCallback<TOnInputChange>((event) => {
    const target = event?.target

    if (!target) return

    target.value =
      Number(target?.value?.slice(0, 2)) <= Number(target.max)
        ? target?.value?.slice(0, 2)
        : target.max
  }, [])

  type TOnInputBlur = ({ timePart, value }: { timePart: ETimeParts; value: string }) => void

  const onInputBlur = useCallback<TOnInputBlur>(
    ({ timePart, value }) => {
      const formattedValue = Number(value.slice(0, 2))

      if (!formattedValue) {
        setActiveInput(null)
        return
      }

      const changedTime = {
        [ETimeParts.hours]: { hours: formattedValue },
        [ETimeParts.minutes]: { minutes: formattedValue },
        [ETimeParts.seconds]: { seconds: formattedValue }
      }[timePart]

      const newTime = twoWayDateFormat(set(time, changedTime))

      setValue(name, newTime)
      setActiveInput(null)
    },
    [name, setValue, time]
  )

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

  const onMouseLeaveHours = useCallback(() => {
    const hour = getActualVisibleListElement({
      refsMap: getRefsMap(),
      mandatoryId: ETimeParts.hours
    })?.replace(ETimeParts.hours, '')

    if (!hour) return

    const newTime = twoWayDateFormat(set(time, { hours: Number(hour) }))

    setValue(name, newTime)
  }, [getRefsMap, name, setValue, time])

  const onMouseLeaveMinutes = useCallback(() => {
    const minute = getActualVisibleListElement({
      refsMap: getRefsMap(),
      mandatoryId: ETimeParts.minutes
    })?.replace(ETimeParts.minutes, '')

    if (!minute) return

    const newTime = twoWayDateFormat(set(time, { minutes: Number(minute) }))

    setValue(name, newTime)
  }, [getRefsMap, name, setValue, time])

  const onMouseLeaveSeconds = useCallback(() => {
    const second = getActualVisibleListElement({
      refsMap: getRefsMap(),
      mandatoryId: ETimeParts.seconds
    })?.replace(ETimeParts.seconds, '')

    if (!second) return

    const newTime = twoWayDateFormat(set(time, { seconds: Number(second) }))

    setValue(name, newTime)
  }, [getRefsMap, name, setValue, time])

  useEffect(() => {
    if (isVisible && activeInput === null) scrollClockTo(clockSimpleFormat)
  }, [time, isVisible, scrollClockTo, clockSimpleFormat, activeInput])

  return (
    <SharedS.DateWidgetWrapper $isVisible={isVisible}>
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
        onMouseLeave={onMouseLeaveHours}
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
        onMouseLeave={onMouseLeaveMinutes}
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
        onMouseLeave={onMouseLeaveSeconds}
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
    </SharedS.DateWidgetWrapper>
  )
}
