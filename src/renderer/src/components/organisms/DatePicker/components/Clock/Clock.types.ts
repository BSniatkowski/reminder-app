export interface ISliderProps {
  $itemSize: number
}

export enum ETimeParts {
  hours = 'hours',
  minutes = 'minutes',
  seconds = 'seconds'
}

interface IGetTimePartArrayProps {
  time: Date
  timePart: ETimeParts
  actualDate: Date
  defaulNumber: number
}

export type TGetTimePartArray = ({
  time,
  timePart,
  actualDate,
  defaulNumber
}: IGetTimePartArrayProps) => Array<string>
