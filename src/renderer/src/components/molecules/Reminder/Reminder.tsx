import { IReminderProps } from './Reminder.types'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EButtonSizes, EButtonVariants } from '@renderer/components/atoms/Button/Button.types'
import { Text } from '@renderer/components/atoms/Text/Text'
import { ETextTags } from '@renderer/components/atoms/Text/Text.types'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
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
  return (
    <div>
      <BackgroundWrapper>
        <Icon variant={EIconVariants.NOTIFICATION} />
      </BackgroundWrapper>
      <div>
        <div>
          <div>
            <Text nowrap>{date}</Text>
          </div>
          <Text as={ETextTags.h3}>{title}</Text>
        </div>
        <div>
          <Button
            variant={EButtonVariants.light}
            size={EButtonSizes.small}
            iconVariant={EIconVariants.PREVIEW}
            onClick={() => onPreviewReminderClick(id)}
          />
          <Button
            variant={EButtonVariants.light}
            size={EButtonSizes.small}
            iconVariant={EIconVariants.EDIT}
            onClick={() => onEditReminderClick(id)}
          />
          <Button
            variant={EButtonVariants.remove}
            size={EButtonSizes.small}
            iconVariant={EIconVariants.DELETE}
            onClick={() => onRemoveReminderClick(id)}
          />
        </div>
      </div>
      <div>
        <Text as={ETextTags.p}>{description}</Text>
      </div>
    </div>
  )
}
