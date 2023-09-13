import { useForm } from 'react-hook-form'
import * as S from './Form.style'
import { TextInput } from '@renderer/components/molecules/TextInput/TextInput'

export const Form = ({ fields, defaultValues, onSubmit }) => {
  const { control, handleSubmit } = useForm({ defaultValues })

  return (
    <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
      {fields.map(({ name, label }) => {
        const FieldComponent = TextInput

        return <FieldComponent key={name} name={name} label={label} control={control} />
      })}
      <S.SubmitButton />
    </S.FormWrapper>
  )
}
