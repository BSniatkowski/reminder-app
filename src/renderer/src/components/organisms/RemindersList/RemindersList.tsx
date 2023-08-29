import { List } from '@renderer/components/molecules/List/List'
import { IRemindersList } from './RemindersList.types'
import { Button } from '@renderer/components/atoms/Button/Button'
import { Reminder } from '@renderer/components/molecules/Reminder/Reminder'
import { EListDirections } from '@renderer/components/molecules/List/List.types'

export const RemindersList: React.FC<IRemindersList> = ({
  reminders,
  onReminderEditClick,
  onAddNewReminderClick
}) => {
  return (
    <List direction={EListDirections.column}>
      {reminders.length > 0 &&
        reminders.map(({ id, title }) => (
          <Reminder key={id} id={id} title={title} onReminderEditClick={onReminderEditClick} />
        ))}
      <Button text="Add new reminder" onClick={onAddNewReminderClick} />
    </List>
  )
}
