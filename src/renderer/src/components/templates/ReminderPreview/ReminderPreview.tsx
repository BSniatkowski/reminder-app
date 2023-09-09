import { Tile } from '@renderer/components/atoms/Tile/Tile'
import { IReminderPreviewProps } from './ReminderPreview.types'
import { Text } from '@renderer/components/atoms/Text/Text'
import { ETextTags } from '@renderer/components/atoms/Text/Text.types'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EButtonSizes, EButtonVariants } from '@renderer/components/atoms/Button/Button.types'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { useTheme } from 'styled-components'

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
    <Tile transparent>
      <Tile nowrap transparent alignItems="flext-start">
        <Text as={ETextTags.h2}>{title}</Text>
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
      <Text>{date}</Text>
    </Tile>
  )
}
