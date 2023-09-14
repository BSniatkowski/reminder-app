import { FieldValues, SubmitHandler } from 'react-hook-form'

export enum EFieldType {
  text = 'text',
  textarea = 'textarea',
  date = 'date'
}

export interface IFieldItem<FormValues> {
  name: keyof FormValues
  label?: string
  type: EFieldType
  defaultValue: unknown
}

export type TOnSubmit<FormValues extends FieldValues> = SubmitHandler<FormValues>
export interface IFormProps<FormValues extends FieldValues> {
  fields: Array<IFieldItem<FormValues>>
  onSubmit: TOnSubmit<FormValues>
}
