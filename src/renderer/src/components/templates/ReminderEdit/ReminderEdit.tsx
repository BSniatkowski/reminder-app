import { Tile } from '@renderer/components/atoms/Tile/Tile'
import { IReminderEditProps } from './ReminderEdit.types'
import { Text } from '@renderer/components/atoms/Text/Text'
import { ETextTags } from '@renderer/components/atoms/Text/Text.types'
import { Form } from '@renderer/components/organisms/Form/Form'
import { ETileContentDirections, ETileSizes } from '@renderer/components/atoms/Tile/Tile.types'
import { FieldValues } from 'react-hook-form'

export const ReminderEdit = <FormValues extends FieldValues>({
  fields,
  onSubmit
}: IReminderEditProps<FormValues>): React.ReactNode => {
  return (
    <Tile transparent contentDirection={ETileContentDirections.column} size={ETileSizes.full}>
      <Text as={ETextTags.h1}>Reminder edit</Text>
      <Form<FormValues> fields={fields} onSubmit={onSubmit} />
    </Tile>
  )
}
