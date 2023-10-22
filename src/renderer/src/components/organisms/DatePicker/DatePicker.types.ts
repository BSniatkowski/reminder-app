import { IBasicFieldProps } from '@renderer/components/organisms/Form/Form.types'
import { FieldValues, UseControllerProps } from 'react-hook-form'

export interface IDatePickerProps<T extends FieldValues>
  extends UseControllerProps<T>,
    IBasicFieldProps {}

export type TDatePicker<T extends FieldValues> = React.FC<IDatePickerProps<T>>

export enum EActivePickers {
  calendar = 'calendar',
  clock = 'clock',
  none = 'none'
}
export interface IDatePickerButtonsWrapperProps {
  $activePicker?: EActivePickers
}
