import { FieldValues, UseControllerProps } from 'react-hook-form'

export interface ITextInputProps {
  label?: string
}

export type TTextInput = React.FC<ITextInputProps & UseControllerProps<FieldValues>>
