import { useForm } from 'react-hook-form'
import * as S from './Form.style'
import { TextInput } from '@renderer/components/molecules/TextInput/TextInput'
import { Textarea } from '@renderer/components/molecules/Textarea/Textarea'
import { Button } from '@renderer/components/atoms/Button/Button'
import { Tile } from '@renderer/components/atoms/Tile/Tile'

const fieldsComponentsMap = {
  text: TextInput,
  textarea: Textarea
}

export const Form = ({ fields, defaultValues, onSubmit }) => {
  const { control, reset, handleSubmit } = useForm({ defaultValues })

  return (
    <S.FormWrapper>
      {fields.map(({ name, type, label }) => {
        const FieldComponent = fieldsComponentsMap[type] ?? TextInput

        return <FieldComponent key={name} name={name} label={label} control={control} />
      })}
      <Tile transparent>
        <Button onClick={reset} text="Reset" />
        <Button onClick={handleSubmit(onSubmit)} text="Submit" />
      </Tile>
    </S.FormWrapper>
  )
}
