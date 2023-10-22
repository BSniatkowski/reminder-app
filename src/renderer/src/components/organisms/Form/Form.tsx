import { DefaultValues, FieldValues, FormProvider, useForm } from 'react-hook-form'
import * as S from './Form.style'
import { TextInput } from '@renderer/components/molecules/TextInput/TextInput'
import { Textarea } from '@renderer/components/molecules/Textarea/Textarea'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EFieldType, IFormProps } from './Form.types'
import { DatePicker } from '@renderer/components/organisms/DatePicker/DatePicker'
import { Checkbox } from '@renderer/components/molecules/Checkbox/Checkbox'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { EButtonSizes, EButtonVariants } from '@renderer/components/atoms/Button/Button.types'

const fieldsComponentsMap = {
  [EFieldType.text]: TextInput,
  [EFieldType.textarea]: Textarea,
  [EFieldType.checkbox]: Checkbox,
  [EFieldType.date]: DatePicker
}

export const Form = <FormValues extends FieldValues = Record<string, unknown>>({
  fields,
  onDelete,
  onSubmit
}: IFormProps<FormValues>): React.ReactNode => {
  const defaultValues = Object.fromEntries(
    fields.map(({ name, defaultValue }) => [name, defaultValue])
  ) as DefaultValues<FormValues>

  const { control, handleSubmit, ...methods } = useForm<FormValues>({
    defaultValues
  })

  return (
    <FormProvider control={control} handleSubmit={handleSubmit} {...methods}>
      <S.FormWrapper>
        <S.FormInsideWrapper>
          {fields.map(({ name, type, label }) => {
            const FieldComponent = fieldsComponentsMap[type] ?? TextInput

            return (
              <FieldComponent<FormValues> key={name} name={name} label={label} control={control} />
            )
          })}
        </S.FormInsideWrapper>
        <S.ActionButtonsContainer>
          {onDelete && (
            <Button
              onClick={onDelete}
              variant={EButtonVariants.remove}
              size={EButtonSizes.big}
              iconVariant={EIconVariants.DELETE}
            />
          )}
          <Button
            size={EButtonSizes.big}
            onClick={handleSubmit(onSubmit)}
            iconVariant={EIconVariants.DONE}
          />
        </S.ActionButtonsContainer>
      </S.FormWrapper>
    </FormProvider>
  )
}
