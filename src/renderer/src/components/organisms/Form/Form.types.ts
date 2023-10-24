import { FieldValues, Path, SubmitHandler } from 'react-hook-form'

export enum EFieldType {
  text = 'text',
  textarea = 'textarea',
  checkbox = 'checkbox',
  date = 'date'
}

export interface IBasicFieldProps {
  label?: string
  isVisible?: boolean
}

export interface IFieldItem<FormValues> extends IBasicFieldProps {
  name: Path<FormValues>
  visibilityConditions?: Array<{ fieldName: string; condtion: (value: unknown) => boolean }>
  type: EFieldType
  defaultValue: unknown
}

export type TOnSubmit<FormValues extends FieldValues> = SubmitHandler<FormValues>

export enum EStyleVariants {
  edit,
  search
}
export interface IFormProps<FormValues extends FieldValues> {
  styleVariant?: EStyleVariants
  fields: Array<IFieldItem<FormValues>>
  onDelete?: false | (() => void)
  onSubmit: TOnSubmit<FormValues>
  submitOnChange?: boolean
}

export interface IFormInsideWrapperProps {
  $styleVariant: EStyleVariants
}
