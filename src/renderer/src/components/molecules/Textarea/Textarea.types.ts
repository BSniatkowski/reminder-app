import { FieldValues, UseControllerProps } from 'react-hook-form'

export interface ITextareaProps {
  label?: string
}

export type TTextarea = React.FC<ITextareaProps & UseControllerProps<FieldValues>>
