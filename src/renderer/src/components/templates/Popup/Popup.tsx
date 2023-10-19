import * as S from './Popup.styles'
import { TPopupProps } from './Popup.types'
import { Text } from '@renderer/components/atoms/Text/Text'
import { findAndReplaceLinks } from '@renderer/utils/findAndReplaceLinks'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { EButtonVariants } from '@renderer/components/atoms/Button/Button.types'
import { Gloss } from '@renderer/components/atoms/Gloss/Gloss'
import { Dialog } from '@renderer/components/molecules/Dialog/Dialog'
import { Link } from '@renderer/components/atoms/Link/Link'
import { YTPlayer } from '@renderer/components/organisms/YTPlayer/YTPlayer'

export const Popup: React.FC<TPopupProps> = ({
  title,
  description,
  link,
  videoId,
  autoPlay,
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
        <Gloss animate />
        {videoId && <YTPlayer videoId={videoId} autoPlay={autoPlay} />}
        <div>
          <Text>{title}</Text>
        </div>
        {link && <Link text={'Open associated link'} linkRef={link} />}
        {descriptionNodes}
        <div>
          <Button
            variant={EButtonVariants.light}
            iconVariant={EIconVariants.DONE}
            onClick={onDone}
          />
          <Button
            variant={EButtonVariants.light}
            iconVariant={EIconVariants.POSTPONE}
            onClick={onPostpone}
          />
          <Button
            variant={EButtonVariants.remove}
            iconVariant={EIconVariants.DELETE}
            onClick={onRemove}
          />
        </div>
      </S.PopupWrapper>
    </>
  )
}
