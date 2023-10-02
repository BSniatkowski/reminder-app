export interface ISliderProps {
  $itemSize: number
}

export enum ETimeParts {
  hours = 'hours',
  minutes = 'minutes',
  seconds = 'seconds'
}

export type TGetTimePartArray = (timePart: ETimeParts) => Array<string>

export type TScrollClockTo = ({
  hour,
  minute,
  second
}: {
  hour?: string
  minute?: string
  second?: string
}) => void
