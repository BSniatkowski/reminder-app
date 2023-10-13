import { ETimeParts, TGetTimePartArray } from '../components/Clock/Clock.types'
import { formatTo2Digits } from './formatTo2Digits'

export const getTimePartArray: TGetTimePartArray = (timePart) => {
  const defaulNumber = {
    [ETimeParts.hours]: 24,
    [ETimeParts.minutes]: 60,
    [ETimeParts.seconds]: 60
  }[timePart]

  return [...Array(defaulNumber).keys()].map((_, index) => formatTo2Digits(index))
}
