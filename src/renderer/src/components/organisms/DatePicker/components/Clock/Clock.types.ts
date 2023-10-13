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

export type TOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => void

export type TOnInputBlur = ({ timePart, value }: { timePart: ETimeParts; value: string }) => void

export type TOnMouseLeaveSlider = (timePart: ETimeParts) => void
