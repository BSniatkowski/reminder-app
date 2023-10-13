import { IBasicFieldProps } from '@renderer/components/organisms/Form/Form.types'
import { FieldValues, UseControllerProps } from 'react-hook-form'

export interface ICheckboxProps<T extends FieldValues>
  extends UseControllerProps<T>,
    IBasicFieldProps {}

export type TCheckbox<T extends FieldValues> = React.FC<ICheckboxProps<T>>

export interface ICheckboxWrapperProps {
  $isActive: boolean
  $disabled?: boolean
}
