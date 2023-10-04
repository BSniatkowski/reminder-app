import { List } from '@renderer/components/molecules/List/List'
import { IRemindersListProps } from './RemindersList.types'
import { Reminder } from '@renderer/components/molecules/Reminder/Reminder'
import { EListDirections } from '@renderer/components/molecules/List/List.types'

export const RemindersList: React.FC<IRemindersListProps> = ({
  reminders,
  onPreviewReminderClick,
  onEditReminderClick,
  onRemoveReminderClick
}) => {
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
            onRemoveReminderClick={onRemoveReminderClick}
          />
        ))}
    </List>
  )
}
