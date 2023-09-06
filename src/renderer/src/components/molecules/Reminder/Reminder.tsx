import { Tile } from '@atoms/Tile/Tile'
import { IReminderProps } from './Reminder.types'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EButtonSizes, EButtonVariants } from '@renderer/components/atoms/Button/Button.types'
import { ETileContentDirections, ETileSizes } from '@renderer/components/atoms/Tile/Tile.types'
import { Text } from '@renderer/components/atoms/Text/Text'
import { ETextTags } from '@renderer/components/atoms/Text/Text.types'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { useTheme } from 'styled-components'
import { BackgroundWrapper } from './Reminder.style'
import { Icon } from '@renderer/components/atoms/Icon/Icon'

export const Reminder: React.FC<IReminderProps> = ({
  id,
  title,
  description,
  onPreviewReminderClick,
  onReminderEditClick
}) => {
  const {
    palette: {
      background: { primary, secondary }
    }
  } = useTheme()

  return (
    <Tile
      size={ETileSizes.full}
      contentDirection={ETileContentDirections.column}
      alignItems="flex-start"
    >
      <Tile
        transparent
        size={ETileSizes.full}
        justifyContent="space-between"
        alignItems="flex-start"
        nowrap
      >
        <Text as={ETextTags.h2}>{title}</Text>
        <Tile transparent size={ETileSizes.small} nowrap>
          <Button
            variant={EButtonVariants.light}
            size={EButtonSizes.small}
            iconVariant={EIconVariants.PREVIEW}
            iconColor={primary}
            iconActiveColor={secondary}
            onClick={() => onPreviewReminderClick(id)}
          />
          <Button
            variant={EButtonVariants.light}
            size={EButtonSizes.small}
            iconVariant={EIconVariants.EDIT}
            iconColor={primary}
            iconActiveColor={secondary}
            onClick={() => onReminderEditClick(id)}
          />
        </Tile>
      </Tile>
      <Tile transparent size={ETileSizes.small}>
        <Text as={ETextTags.p}>{description}</Text>
      </Tile>
      <BackgroundWrapper>
        <Icon variant={EIconVariants.NOTIFICATION} color={primary} />
      </BackgroundWrapper>
    </Tile>
  )
}
