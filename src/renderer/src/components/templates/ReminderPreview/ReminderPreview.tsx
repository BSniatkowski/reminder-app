import { Tile } from '@renderer/components/atoms/Tile/Tile'
import { IReminderPreviewProps } from './ReminderPreview.types'
import { Text } from '@renderer/components/atoms/Text/Text'
import { ETextTags } from '@renderer/components/atoms/Text/Text.types'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EButtonSizes, EButtonVariants } from '@renderer/components/atoms/Button/Button.types'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { useTheme } from 'styled-components'
import { ETileContentDirections, ETileSizes } from '@renderer/components/atoms/Tile/Tile.types'
import { findAndReplaceLinks } from '@renderer/utils/findAndReplaceLinks'
import { Dialog } from '@renderer/components/molecules/Dialog/Dialog'
import { Link } from '@renderer/components/atoms/Link/Link'

export const ReminderPreview: React.FC<IReminderPreviewProps> = ({
  title,
  description,
  link,
  autoOpenLink,
  date,
  onEditReminderClick,
  onRemoveReminderClick,
  isDialogVisible,
  dialogMainText,
  onDialogCancelClick,
  onDialogAcceptClick
}) => {
  const {
    palette: { primary, secondary, white }
  } = useTheme()

  return (
    <>
      <Dialog
        isVisible={isDialogVisible}
        mainText={dialogMainText}
        cancelText="Cancel"
        acceptText="Delete"
        onCancel={onDialogCancelClick}
        onAccept={onDialogAcceptClick}
      />
      <Tile
        size={ETileSizes.full}
        contentDirection={ETileContentDirections.column}
        transparent
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Tile
          size={ETileSizes.full}
          nowrap
          transparent
          alignItems="flext-start"
          justifyContent="space-between"
        >
          <Tile>
            <Text nowrap>{date}</Text>
          </Tile>
          <Tile
            transparent
            size={ETileSizes.small}
            alignItems="flex-start"
            contentDirection={ETileContentDirections.row}
          >
            <Button
              variant={EButtonVariants.light}
              size={EButtonSizes.small}
              iconVariant={EIconVariants.EDIT}
              iconColor={primary}
              iconActiveColor={secondary}
              onClick={onEditReminderClick}
            />
            <Button
              variant={EButtonVariants.remove}
              size={EButtonSizes.small}
              iconVariant={EIconVariants.DELETE}
              iconColor={white}
              iconActiveColor={white}
              onClick={onRemoveReminderClick}
            />
          </Tile>
        </Tile>
        <Tile
          transparent
          size={ETileSizes.full}
          contentDirection={ETileContentDirections.column}
          alignItems="flex-start"
        >
          <Text as={ETextTags.h1}>{title}</Text>
          {link && (
            <Tile size={ETileSizes.full} justifyContent="flex-start">
              <Text as={ETextTags.h2}>{`Associated link${
                autoOpenLink ? ' will be open with popup' : ''
              }:`}</Text>
              <Link text={link} linkRef={link} />
            </Tile>
          )}
          {findAndReplaceLinks({ text: description })}
        </Tile>
      </Tile>
    </>
  )
}
