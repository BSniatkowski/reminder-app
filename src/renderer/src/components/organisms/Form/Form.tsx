import { DefaultValues, FieldValues, FormProvider, useForm } from 'react-hook-form'
import * as S from './Form.style'
import { TextInput } from '@renderer/components/molecules/TextInput/TextInput'
import { Textarea } from '@renderer/components/molecules/Textarea/Textarea'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EFieldType, IFormProps } from './Form.types'
import { DatePicker } from '@renderer/components/organisms/DatePicker/DatePicker'
import { Checkbox } from '@renderer/components/molecules/Checkbox/Checkbox'

const fieldsComponentsMap = {
  [EFieldType.text]: TextInput,
  [EFieldType.textarea]: Textarea,
  [EFieldType.checkbox]: Checkbox,
  [EFieldType.date]: DatePicker
}

export const Form = <FormValues extends FieldValues = Record<string, unknown>>({
  fields,
  onSubmit
}: IFormProps<FormValues>): React.ReactNode => {
  const defaultValues = Object.fromEntries(
    fields.map(({ name, defaultValue }) => [name, defaultValue])
  ) as DefaultValues<FormValues>

  const { control, reset, handleSubmit, ...methods } = useForm<FormValues>({
    defaultValues
  })

  return (
    <FormProvider control={control} reset={reset} handleSubmit={handleSubmit} {...methods}>
      <S.FormWrapper>
        {fields.map(({ name, type, label }) => {
          const FieldComponent = fieldsComponentsMap[type] ?? TextInput

          return (
            <FieldComponent<FormValues> key={name} name={name} label={label} control={control} />
          )
        })}
        <div>
          <Button onClick={reset} text="Reset" />
          <Button onClick={handleSubmit(onSubmit)} text="Submit" />
        </div>
      </S.FormWrapper>
    </FormProvider>
  )
}
