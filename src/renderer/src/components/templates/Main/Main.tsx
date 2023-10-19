import { RemindersList } from '@renderer/components/organisms/RemindersList/RemindersList'
import { IMainProps } from './Main.type'
import * as S from './Main.style'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EButtonSizes } from '@renderer/components/atoms/Button/Button.types'
import { EIconSizes, EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { Text } from '@renderer/components/atoms/Text/Text'
import { ETextTags } from '@renderer/components/atoms/Text/Text.types'
import { Icon } from '@renderer/components/atoms/Icon/Icon'

export const Main: React.FC<IMainProps> = ({ reminders, onAddReminderClick }) => {
  return (
    <>
      {reminders.length > 0 ? (
        <RemindersList
          reminders={reminders}
          onReminderClick={() => {}}
          onAddReminderClick={onAddReminderClick}
        />
      ) : (
        <S.EncourageWrapper>
          <S.EncourageTop>
            <Text as={ETextTags.h2}>There are no reminders to show</Text>
            <Icon size={EIconSizes.large} variant={EIconVariants.NOTIFICATION} />
          </S.EncourageTop>
          <Button
            text={<Text as={ETextTags.h2}>Remind me about...</Text>}
            size={EButtonSizes.big}
            iconVariant={EIconVariants.ADD}
            onClick={onAddReminderClick}
          />
        </S.EncourageWrapper>
      )}
    </>
  )
}
