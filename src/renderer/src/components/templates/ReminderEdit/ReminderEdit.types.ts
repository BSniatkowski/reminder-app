import { IFieldItem, TOnSubmit } from '@renderer/components/organisms/Form/Form.types'
import { FieldValues } from 'react-hook-form'

export interface IReminderEditProps<FormValues extends FieldValues> {
  fields: Array<IFieldItem<FormValues>>
  onSubmit: TOnSubmit<FormValues>
}
