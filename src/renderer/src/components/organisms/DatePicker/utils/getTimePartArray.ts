import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  endOfDay,
  endOfHour,
  endOfMinute,
  getHours,
  getMinutes,
  getSeconds,
  isToday
} from 'date-fns'
import { ETimeParts, TGetTimePartArray } from '../components/Clock/Clock.types'

const formatTo2Digits = (number: number) => (number < 10 ? `0${number}` : `${number}`)

export const getTimePartArray: TGetTimePartArray = ({
  time,
  timePart,
  actualDate,
  defaulNumber
}) => {
  const { timeDiffMethod, endOfHigherMethod, getTimeMethod } = {
    [ETimeParts.hours]: {
      timeDiffMethod: differenceInHours,
      endOfHigherMethod: endOfDay,
      getTimeMethod: getHours
    },
    [ETimeParts.minutes]: {
      timeDiffMethod: differenceInMinutes,
      endOfHigherMethod: endOfHour,
      getTimeMethod: getMinutes
    },
    [ETimeParts.seconds]: {
      timeDiffMethod: differenceInSeconds,
      endOfHigherMethod: endOfMinute,
      getTimeMethod: getSeconds
    }
  }[timePart]

  const itemsCount = isToday(time)
    ? timeDiffMethod(endOfHigherMethod(actualDate), actualDate) + 1
    : defaulNumber

  const startTime = isToday(time) ? getTimeMethod(actualDate) : 0

  return new Array(Math.abs(itemsCount))
    .fill(0)
    .map((_, index) => formatTo2Digits(index + startTime))
}
