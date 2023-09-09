import { List } from '@renderer/components/molecules/List/List'
import { IRemindersListProps } from './RemindersList.types'
import { Button } from '@renderer/components/atoms/Button/Button'
import { Reminder } from '@renderer/components/molecules/Reminder/Reminder'
import { EListDirections } from '@renderer/components/molecules/List/List.types'
import { EButtonSizes } from '@renderer/components/atoms/Button/Button.types'

import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { useTheme } from 'styled-components'

export const RemindersList: React.FC<IRemindersListProps> = ({
  reminders,
  onAddReminderClick,
  onPreviewReminderClick,
  onEditReminderClick
}) => {
  const {
    palette: { primary, white }
  } = useTheme()

  return (
    <List direction={EListDirections.column}>
      {reminders.length > 0 &&
        reminders.map(({ id, title, description, date }) => (
          <Reminder
            key={id}
            id={id}
            title={title}
            description={description}
            date={date}
            onPreviewReminderClick={onPreviewReminderClick}
            onEditReminderClick={onEditReminderClick}
          />
        ))}
      <Button
        size={EButtonSizes.full}
        iconVariant={EIconVariants.ADD}
        iconColor={white}
        iconActiveColor={primary}
        onClick={onAddReminderClick}
      />
    </List>
  )
}
