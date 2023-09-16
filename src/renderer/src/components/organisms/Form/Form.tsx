import { DefaultValues, FieldValues, useForm } from 'react-hook-form'
import * as S from './Form.style'
import { TextInput } from '@renderer/components/molecules/TextInput/TextInput'
import { Textarea } from '@renderer/components/molecules/Textarea/Textarea'
import { Button } from '@renderer/components/atoms/Button/Button'
import { Tile } from '@renderer/components/atoms/Tile/Tile'
import { EFieldType, IFormProps } from './Form.types'
import { DatePicker } from '@renderer/components/molecules/DatePicker/DatePicker'

const fieldsComponentsMap = {
  [EFieldType.text]: TextInput,
  [EFieldType.textarea]: Textarea,
  [EFieldType.date]: DatePicker
}

export const Form = <FormValues extends FieldValues = Record<string, unknown>>({
  fields,
  onSubmit
}: IFormProps<FormValues>): React.ReactNode => {
  const defaultValues = Object.fromEntries(
    fields.map(({ name, defaultValue }) => [name, defaultValue])
  ) as DefaultValues<FormValues>

  const { control, reset, handleSubmit } = useForm<FormValues>({
    defaultValues
  })

  return (
    <S.FormWrapper>
      {fields.map(({ name, type, label }) => {
        const FieldComponent = fieldsComponentsMap[type] ?? TextInput

        return <FieldComponent<FormValues> key={name} name={name} label={label} control={control} />
      })}
      <Tile transparent>
        <Button onClick={reset} text="Reset" />
        <Button onClick={handleSubmit(onSubmit)} text="Submit" />
      </Tile>
    </S.FormWrapper>
  )
}
