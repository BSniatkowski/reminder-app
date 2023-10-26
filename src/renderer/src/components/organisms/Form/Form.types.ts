import { FieldValues, SubmitHandler } from 'react-hook-form'
import { ISelectInputProps } from '../SelectInput/SelectInput.types'
import { ITextInputProps } from '@renderer/components/molecules/TextInput/TextInput.types'
import { ITextareaProps } from '@renderer/components/molecules/Textarea/Textarea.types'
import { ICheckboxProps } from '@renderer/components/molecules/Checkbox/Checkbox.types'
import { IDatePickerProps } from '../DatePicker/DatePicker.types'

export enum EFieldTypes {
  text = 'text',
  textarea = 'textarea',
  select = 'select',
  checkbox = 'checkbox',
  date = 'date'
}

export interface IBasicFieldProps {
  label?: string
  visibilityConditions?: Array<{ fieldName: string; condtion: (value: unknown) => boolean }>
  isVisible?: boolean
}

export type IFieldItem<FormValues extends FieldValues> =
  | (ITextInputProps<FormValues> & { type: EFieldTypes.text })
  | (ITextareaProps<FormValues> & { type: EFieldTypes.textarea })
  | (ICheckboxProps<FormValues> & { type: EFieldTypes.checkbox })
  | (IDatePickerProps<FormValues> & { type: EFieldTypes.date })
  | (ISelectInputProps<FormValues> & { type: EFieldTypes.select })

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
