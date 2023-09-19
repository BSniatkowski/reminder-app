import { IBasicFieldProps } from '@renderer/components/organisms/Form/Form.types'
import { FieldValues, UseControllerProps } from 'react-hook-form'

export interface ITextInputProps<T extends FieldValues>
  extends UseControllerProps<T>,
    IBasicFieldProps {}

export type TTextInput<T extends FieldValues> = React.FC<ITextInputProps<T>>
