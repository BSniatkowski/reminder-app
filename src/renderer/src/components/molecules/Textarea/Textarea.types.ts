import { IBasicFieldProps } from '@renderer/components/organisms/Form/Form.types'
import { FieldValues, UseControllerProps } from 'react-hook-form'

export interface ITextareaProps<T extends FieldValues>
  extends UseControllerProps<T>,
    IBasicFieldProps {}
