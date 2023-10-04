import { RemindersList } from '@renderer/components/organisms/RemindersList/RemindersList'
import { IMainProps } from './Main.type'
import { Dialog } from '@renderer/components/molecules/Dialog/Dialog'

export const Main: React.FC<IMainProps> = ({
  reminders,
  isDialogVisible,
  dialogMainText,
  onAddReminderClick,
  onPreviewReminderClick,
  onEditReminderClick,
  onRemoveReminderClick,
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
      <RemindersList
        reminders={reminders}
        onAddReminderClick={onAddReminderClick}
        onPreviewReminderClick={onPreviewReminderClick}
        onEditReminderClick={onEditReminderClick}
        onRemoveReminderClick={onRemoveReminderClick}
      />
    </>
  )
}
