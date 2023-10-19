import { IReminderPreviewProps } from './ReminderPreview.types'
import { Text } from '@renderer/components/atoms/Text/Text'
import { ETextTags } from '@renderer/components/atoms/Text/Text.types'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EButtonSizes, EButtonVariants } from '@renderer/components/atoms/Button/Button.types'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
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
      <div>
        <div>
          <div>
            <Text nowrap>{date}</Text>
          </div>
          <div>
            <Button
              variant={EButtonVariants.light}
              size={EButtonSizes.small}
              iconVariant={EIconVariants.EDIT}
              onClick={onEditReminderClick}
            />
            <Button
              variant={EButtonVariants.remove}
              size={EButtonSizes.small}
              iconVariant={EIconVariants.DELETE}
              onClick={onRemoveReminderClick}
            />
          </div>
        </div>
        <div>
          <Text as={ETextTags.h1}>{title}</Text>
          {link && (
            <div>
              <Text as={ETextTags.h2}>{`Associated link${
                autoOpenLink ? ' will be open with popup' : ''
              }:`}</Text>
              <Link text={link} linkRef={link} />
            </div>
          )}
          {findAndReplaceLinks({ text: description })}
        </div>
      </div>
    </>
  )
}
