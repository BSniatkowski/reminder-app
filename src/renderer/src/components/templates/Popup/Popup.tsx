import { Tile } from '@renderer/components/atoms/Tile/Tile'
import * as S from './Popup.styles'
import { TPopupProps } from './Popup.types'
import { Text } from '@renderer/components/atoms/Text/Text'
import { findAndReplaceLinks } from '@renderer/utils/findAndReplaceLinks'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { useTheme } from 'styled-components'
import { EButtonVariants } from '@renderer/components/atoms/Button/Button.types'
import { ETileContentDirections, ETileSizes } from '@renderer/components/atoms/Tile/Tile.types'
import { Decoration } from '@renderer/components/atoms/Decoration/Decoration'
import { Dialog } from '@renderer/components/molecules/Dialog/Dialog'
import { Link } from '@renderer/components/atoms/Link/Link'

export const Popup: React.FC<TPopupProps> = ({
  title,
  description,
  link,
  isPostponeDialogVisible,
  postponeDialogMainText,
  onDone,
  onPostpone,
  onPostponeDialogCancel,
  onPostponeDialogAccept,
  isRemoveReminderDialogVisible,
  removeDialogMainText,
  onRemove,
  onRemoveDialogCancel,
  onRemoveDialogAccept
}) => {
  const {
    palette: { primary, secondary, white }
  } = useTheme()

  const descriptionNodes = findAndReplaceLinks({ text: description })

  return (
    <>
      <Dialog
        isVisible={isPostponeDialogVisible}
        mainText={postponeDialogMainText}
        cancelText="Cancel"
        acceptText="Postpone"
        onCancel={onPostponeDialogCancel}
        onAccept={onPostponeDialogAccept}
      />
      <Dialog
        isVisible={isRemoveReminderDialogVisible}
        mainText={removeDialogMainText}
        cancelText="Cancel"
        acceptText="Delete"
        onCancel={onRemoveDialogCancel}
        onAccept={onRemoveDialogAccept}
      />
      <S.PopupWrapper
        $size={ETileSizes.full}
        $contentDirection={ETileContentDirections.column}
        $justifyContent="space-between"
        $alignItems="flex-end"
        $nowrap
      >
        <Decoration animate />
        <Tile size={ETileSizes.full}>
          <Text>{title}</Text>
        </Tile>
        <Link text={'Open associated link'} linkRef={link} />
        {descriptionNodes}
        <Tile transparent nowrap>
          <Button
            variant={EButtonVariants.light}
            iconColor={primary}
            iconActiveColor={secondary}
            iconVariant={EIconVariants.DONE}
            onClick={onDone}
          />
          <Button
            variant={EButtonVariants.light}
            iconColor={primary}
            iconActiveColor={secondary}
            iconVariant={EIconVariants.POSTPONE}
            onClick={onPostpone}
          />
          <Button
            variant={EButtonVariants.remove}
            iconColor={white}
            iconActiveColor={white}
            iconVariant={EIconVariants.DELETE}
            onClick={onRemove}
          />
        </Tile>
      </S.PopupWrapper>
    </>
  )
}
