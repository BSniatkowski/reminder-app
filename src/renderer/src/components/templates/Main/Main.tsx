import { RemindersList } from '@renderer/components/organisms/RemindersList/RemindersList'
import { IMainProps } from './Main.type'

export const Main: React.FC<IMainProps> = ({
  reminders,
  onAddReminderClick,
  onEditReminderClick
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '1rem',
        minWidth: '300px',
        padding: '6rem',
        overflowX: 'hidden',
        overflowY: 'auto'
      }}
    >
      <RemindersList
        reminders={reminders}
        onAddReminderClick={onAddReminderClick}
        onReminderEditClick={onEditReminderClick}
      />
    </div>
  )
}
