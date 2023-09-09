import { RemindersList } from '@renderer/components/organisms/RemindersList/RemindersList'
import { IMainProps } from './Main.type'

export const Main: React.FC<IMainProps> = ({
  reminders,
  onAddReminderClick,
  onPreviewReminderClick,
  onEditReminderClick
}) => {
  return (
    <>
      <RemindersList
        reminders={reminders}
        onAddReminderClick={onAddReminderClick}
        onPreviewReminderClick={onPreviewReminderClick}
        onEditReminderClick={onEditReminderClick}
      />
    </>
  )
}
