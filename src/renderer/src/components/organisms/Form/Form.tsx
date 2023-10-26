import { DefaultValues, FieldValues, FormProvider, useForm } from 'react-hook-form'
import * as S from './Form.style'
import { TextInput } from '@renderer/components/molecules/TextInput/TextInput'
import { Textarea } from '@renderer/components/molecules/Textarea/Textarea'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EFieldTypes, EStyleVariants, IFormProps } from './Form.types'
import { DatePicker } from '@renderer/components/organisms/DatePicker/DatePicker'
import { Checkbox } from '@renderer/components/molecules/Checkbox/Checkbox'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { EButtonSizes, EButtonVariants } from '@renderer/components/atoms/Button/Button.types'
import { useEffect, useMemo } from 'react'
import { SelectInput } from '../SelectInput/SelectInput'

export const Form = <FormValues extends FieldValues = Record<string, unknown>>({
  styleVariant = EStyleVariants.edit,
  fields,
  onDelete,
  onSubmit,
  submitOnChange
}: IFormProps<FormValues>): React.ReactNode => {
  const defaultValues = useMemo(
    () => Object.fromEntries(fields.map(({ name, defaultValue }) => [name, defaultValue])),
    [fields]
  ) as DefaultValues<FormValues>

  const { control, handleSubmit, watch, setValue, ...methods } = useForm<FormValues>({
    defaultValues
  })

  const watchAllFields = watch()

  const visibleFields = useMemo(() => {
    const fieldsWithoutConditions = fields
      .filter(({ visibilityConditions }) => !visibilityConditions)
      .map(({ name }) => name)

    const fieldsWithCheckedConditions = fields
      .filter(({ visibilityConditions }) => {
        if (!visibilityConditions) return

        for (const { fieldName, condtion } of visibilityConditions) {
          if (!condtion(watchAllFields?.[fieldName])) {
            return
          }
        }

        return true
      })
      .map(({ name }) => name)

    return [...fieldsWithoutConditions, ...fieldsWithCheckedConditions]
  }, [fields, watchAllFields])

  useEffect(() => {
    if (!submitOnChange) return

    const subscription = watch(() => handleSubmit(onSubmit)())

    return () => subscription.unsubscribe()
  }, [handleSubmit, onSubmit, submitOnChange, watch])

  return (
    <FormProvider
      control={control}
      watch={watch}
      setValue={setValue}
      handleSubmit={handleSubmit}
      {...methods}
    >
      <S.FormWrapper>
        <S.FormInsideWrapper $styleVariant={styleVariant}>
          {fields.map((field) => {
            switch (field.type) {
              case EFieldTypes.text:
                return (
                  <TextInput<FormValues>
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    control={control}
                    isVisible={visibleFields.includes(field.name)}
                  />
                )
              case EFieldTypes.textarea:
                return (
                  <Textarea<FormValues>
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    control={control}
                    isVisible={visibleFields.includes(field.name)}
                  />
                )
              case EFieldTypes.select:
                return (
                  <SelectInput<FormValues>
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    options={field.options}
                    control={control}
                    isVisible={visibleFields.includes(field.name)}
                  />
                )
              case EFieldTypes.checkbox:
                return (
                  <Checkbox<FormValues>
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    control={control}
                    isVisible={visibleFields.includes(field.name)}
                  />
                )
              case EFieldTypes.date:
                return (
                  <DatePicker<FormValues>
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    control={control}
                    isVisible={visibleFields.includes(field.name)}
                  />
                )
              default:
                return
            }
          })}
        </S.FormInsideWrapper>
        {!submitOnChange && (
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
        )}
      </S.FormWrapper>
    </FormProvider>
  )
}
