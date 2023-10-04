import { Tile } from '@renderer/components/atoms/Tile/Tile'
import { IReminderEditProps } from './ReminderEdit.types'
import { Text } from '@renderer/components/atoms/Text/Text'
import { ETextTags } from '@renderer/components/atoms/Text/Text.types'
import { Form } from '@renderer/components/organisms/Form/Form'
import { ETileContentDirections, ETileSizes } from '@renderer/components/atoms/Tile/Tile.types'
import { FieldValues } from 'react-hook-form'
import { Icon } from '@renderer/components/atoms/Icon/Icon'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { useTheme } from 'styled-components'

export const ReminderEdit = <FormValues extends FieldValues>({
  fields,
  onSubmit
}: IReminderEditProps<FormValues>): React.ReactNode => {
  const {
    palette: { primary }
  } = useTheme()

  return (
    <Tile transparent contentDirection={ETileContentDirections.column} size={ETileSizes.full}>
      <Tile contentDirection={ETileContentDirections.row} nowrap alignItems="flex-start">
        <Text as={ETextTags.h1}>Reminder edit</Text>
        <Icon color={primary} variant={EIconVariants.EDIT} size="3.2rem" />
      </Tile>
      <Form<FormValues> fields={fields} onSubmit={onSubmit} />
    </Tile>
  )
}
