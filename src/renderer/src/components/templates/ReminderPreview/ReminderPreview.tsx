import { Tile } from '@renderer/components/atoms/Tile/Tile'
import { IReminderPreviewProps } from './ReminderPreview.types'
import { Text } from '@renderer/components/atoms/Text/Text'
import { ETextTags } from '@renderer/components/atoms/Text/Text.types'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EButtonSizes, EButtonVariants } from '@renderer/components/atoms/Button/Button.types'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { useTheme } from 'styled-components'
import { ETileSizes } from '@renderer/components/atoms/Tile/Tile.types'
import { findAndReplaceLinks } from '@renderer/utils/findAndReplaceLinks'

export const ReminderPreview: React.FC<IReminderPreviewProps> = ({
  title,
  description,
  date,
  onEditReminderClick
}) => {
  const {
    palette: { primary, secondary }
  } = useTheme()

  return (
    <Tile transparent justifyContent="flex-start">
      <Tile nowrap transparent alignItems="flext-start">
        <Tile
          nowrap
          transparent
          size={ETileSizes.small}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {/* TODO - style during date-fns introduce */}
          <Tile>
            <Text>{date}</Text>
          </Tile>
          <Text as={ETextTags.h2}>{title}</Text>
        </Tile>
        <Button
          variant={EButtonVariants.light}
          size={EButtonSizes.small}
          iconVariant={EIconVariants.EDIT}
          iconColor={primary}
          iconActiveColor={secondary}
          onClick={onEditReminderClick}
        />
      </Tile>
      <Text as={ETextTags.p}>{description}</Text>
      {findAndReplaceLinks({
        text: 'Reprehenderit commodo veniam et eiusmod cupidatat https://www.regextester.com/96504# incididunt deserunt proident incididunt.'
      })}
    </Tile>
  )
}
