import { Tile } from '@atoms/Tile/Tile'
import { IReminderProps } from './Reminder.types'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EButtonSizes, EButtonVariants } from '@renderer/components/atoms/Button/Button.types'
import { ETileContentDirections, ETileSizes } from '@renderer/components/atoms/Tile/Tile.types'
import { Text } from '@renderer/components/atoms/Text/Text'
import { ETextTags } from '@renderer/components/atoms/Text/Text.types'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { useTheme } from 'styled-components'

export const Reminder: React.FC<IReminderProps> = ({
  id,
  title,
  description,
  onReminderEditClick
}) => {
  const {
    palette: {
      background: { primary, secondary }
    }
  } = useTheme()

  return (
    <Tile size={ETileSizes.full} contentDirection={ETileContentDirections.column}>
      <Tile transparent size={ETileSizes.full} justifyContent="space-between">
        <Text as={ETextTags.h2}>{title}</Text>
        <Button
          variant={EButtonVariants.light}
          size={EButtonSizes.small}
          iconVariant={EIconVariants.EDIT}
          iconColor={primary}
          iconActiveColor={secondary}
          onClick={() => onReminderEditClick(id)}
        />
      </Tile>
      <Text as={ETextTags.p}>{description}</Text>
    </Tile>
  )
}
