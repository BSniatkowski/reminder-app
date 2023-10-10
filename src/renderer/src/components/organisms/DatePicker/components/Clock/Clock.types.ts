export interface ISliderProps {
  $display: boolean
  $itemSize: number
}

export type TSliderItemInputProps = Omit<ISliderProps, '$display'>

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
