import { RemindersList } from '@renderer/components/organisms/RemindersList/RemindersList'
import { IMain } from './Main.type'

export const Main: React.FC<IMain> = ({ reminders, onAddReminderClick, onEditReminderClick }) => {
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
