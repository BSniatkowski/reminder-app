import { IRemindersListProps } from './RemindersList.types'
import { Reminder } from '@renderer/components/molecules/Reminder/Reminder'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EButtonSizes } from '@renderer/components/atoms/Button/Button.types'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import * as S from './RemindersList.style'

export const RemindersList: React.FC<IRemindersListProps> = ({
  reminders,
  onReminderClick,
  onAddReminderClick
}) => {
  return (
    <S.RemindersListWrapper>
      {reminders.length > 0 &&
        reminders.map(({ id, title, date }) => (
          <Reminder
            key={id}
            id={id}
            title={title}
            date={date}
            onClick={() => onReminderClick(id)}
          />
        ))}
      <Button
        size={EButtonSizes.big}
        iconVariant={EIconVariants.ADD}
        onClick={onAddReminderClick}
      />
    </S.RemindersListWrapper>
  )
}
