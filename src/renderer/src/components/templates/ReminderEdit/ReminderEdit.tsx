import { Tile } from '@renderer/components/atoms/Tile/Tile'
import { IReminderEditProps } from './Reminder.types'
import { Text } from '@renderer/components/atoms/Text/Text'
import { ETextTags } from '@renderer/components/atoms/Text/Text.types'
import { Form } from '@renderer/components/organisms/Form/Form'

export const ReminderEdit: React.FC<IReminderEditProps> = ({
  title,
  description,
  date,
  onSubmit
}) => {
  const fields = [
    { name: 'title', label: 'Title', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
    { name: 'date', label: 'Date', type: 'date' }
  ]

  const defaultValues = { title, description, date }

  return (
    <Tile transparent>
      <Text as={ETextTags.h1}>Reminder edit</Text>
      <Form fields={fields} defaultValues={defaultValues} onSubmit={onSubmit} />
    </Tile>
  )
}
