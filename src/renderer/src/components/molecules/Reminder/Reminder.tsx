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
  date,
  onPreviewReminderClick,
  onEditReminderClick,
  onRemoveReminderClick
}) => {
  const {
    palette: { primary, secondary, white }
  } = useTheme()

  return (
    <Tile
      size={ETileSizes.full}
      contentDirection={ETileContentDirections.column}
      alignItems="flex-start"
    >
      <BackgroundWrapper>
        <Icon variant={EIconVariants.NOTIFICATION} color={primary} />
      </BackgroundWrapper>
      <Tile
        transparent
        size={ETileSizes.full}
        justifyContent="space-between"
        alignItems="flex-start"
        nowrap
      >
        <Tile
          transparent
          size={ETileSizes.small}
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Tile nowrap>
            <Text nowrap>{date}</Text>
          </Tile>
          <Text as={ETextTags.h3}>{title}</Text>
        </Tile>
        <Tile transparent size={ETileSizes.small} justifyContent="flex-end">
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
            onClick={() => onEditReminderClick(id)}
          />
          <Button
            variant={EButtonVariants.remove}
            size={EButtonSizes.small}
            iconVariant={EIconVariants.DELETE}
            iconColor={white}
            iconActiveColor={white}
            onClick={() => onRemoveReminderClick(id)}
          />
        </Tile>
      </Tile>
      <Tile transparent size={ETileSizes.full}>
        <Text as={ETextTags.p}>{description}</Text>
      </Tile>
    </Tile>
  )
}
