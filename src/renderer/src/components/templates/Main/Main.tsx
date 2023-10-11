import { RemindersList } from '@renderer/components/organisms/RemindersList/RemindersList'
import { IMainProps } from './Main.type'
import { Dialog } from '@renderer/components/molecules/Dialog/Dialog'
import { useMemo } from 'react'
import { EReminderSections } from '@renderer/components/pages/MainPage.tsx/MainPage.types'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EButtonSizes } from '@renderer/components/atoms/Button/Button.types'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { useTheme } from 'styled-components'
import { Accordion } from '@renderer/components/molecules/Accordion/Accordion'

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
  const {
    palette: { primary, white }
  } = useTheme()

  const archiveReminders = useMemo(
    () => reminders.filter(({ section }) => section === EReminderSections.archive),
    [reminders]
  )

  const todayReminders = useMemo(
    () => reminders.filter(({ section }) => section === EReminderSections.today),
    [reminders]
  )

  const tomorrowReminders = useMemo(
    () => reminders.filter(({ section }) => section === EReminderSections.tomorrow),
    [reminders]
  )

  const futureReminders = useMemo(
    () => reminders.filter(({ section }) => section === EReminderSections.future),
    [reminders]
  )

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
      {archiveReminders.length > 0 && (
        <Accordion title="Archive reminders">
          <RemindersList
            reminders={archiveReminders}
            onPreviewReminderClick={onPreviewReminderClick}
            onEditReminderClick={onEditReminderClick}
            onRemoveReminderClick={onRemoveReminderClick}
          />
        </Accordion>
      )}
      {todayReminders.length > 0 && (
        <Accordion title="Today reminders" initialOpen>
          <RemindersList
            reminders={todayReminders}
            onPreviewReminderClick={onPreviewReminderClick}
            onEditReminderClick={onEditReminderClick}
            onRemoveReminderClick={onRemoveReminderClick}
          />
        </Accordion>
      )}
      {tomorrowReminders.length > 0 && (
        <Accordion title="Tomorrow reminders" initialOpen>
          <RemindersList
            reminders={tomorrowReminders}
            onPreviewReminderClick={onPreviewReminderClick}
            onEditReminderClick={onEditReminderClick}
            onRemoveReminderClick={onRemoveReminderClick}
          />
        </Accordion>
      )}
      {futureReminders.length > 0 && (
        <Accordion title="Future reminders">
          <RemindersList
            reminders={futureReminders}
            onPreviewReminderClick={onPreviewReminderClick}
            onEditReminderClick={onEditReminderClick}
            onRemoveReminderClick={onRemoveReminderClick}
          />
        </Accordion>
      )}
      <Button
        size={EButtonSizes.full}
        iconVariant={EIconVariants.ADD}
        iconColor={white}
        iconActiveColor={primary}
        onClick={onAddReminderClick}
      />
    </>
  )
}
