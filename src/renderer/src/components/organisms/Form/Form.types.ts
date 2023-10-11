import { FieldValues, Path, SubmitHandler } from 'react-hook-form'

export enum EFieldType {
  text = 'text',
  textarea = 'textarea',
  checkbox = 'checkbox',
  date = 'date'
}

export interface IBasicFieldProps {
  label?: string
}

export interface IFieldItem<FormValues> extends IBasicFieldProps {
  name: Path<FormValues>
  type: EFieldType
  defaultValue: unknown
}

export type TOnSubmit<FormValues extends FieldValues> = SubmitHandler<FormValues>
export interface IFormProps<FormValues extends FieldValues> {
  fields: Array<IFieldItem<FormValues>>
  onSubmit: TOnSubmit<FormValues>
}
