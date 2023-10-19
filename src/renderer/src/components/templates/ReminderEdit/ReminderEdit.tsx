import { IReminderEditProps } from './ReminderEdit.types'
import { Text } from '@renderer/components/atoms/Text/Text'
import { ETextTags } from '@renderer/components/atoms/Text/Text.types'
import { Form } from '@renderer/components/organisms/Form/Form'
import { FieldValues } from 'react-hook-form'
import { Icon } from '@renderer/components/atoms/Icon/Icon'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'

export const ReminderEdit = <FormValues extends FieldValues>({
  fields,
  onSubmit
}: IReminderEditProps<FormValues>): React.ReactNode => {
  return (
    <div>
      <div>
        <Text as={ETextTags.h1}>Reminder edit</Text>
        <Icon variant={EIconVariants.EDIT} size="3.2rem" />
      </div>
      <Form<FormValues> fields={fields} onSubmit={onSubmit} />
    </div>
  )
}
