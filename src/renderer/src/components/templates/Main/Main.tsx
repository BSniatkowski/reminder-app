import { RemindersList } from '@renderer/components/organisms/RemindersList/RemindersList'
import { IMainProps } from './Main.type'
import { Dialog } from '@renderer/components/molecules/Dialog/Dialog'
import { useMemo } from 'react'
import { EReminderSections } from '@renderer/components/pages/MainPage.tsx/MainPage.types'
import { Divider } from '@renderer/components/atoms/Divider/Divider'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EButtonSizes } from '@renderer/components/atoms/Button/Button.types'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { useTheme } from 'styled-components'

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
        <>
          <Divider text="Archive reminders" />
          <RemindersList
            reminders={archiveReminders}
            onPreviewReminderClick={onPreviewReminderClick}
            onEditReminderClick={onEditReminderClick}
            onRemoveReminderClick={onRemoveReminderClick}
          />
        </>
      )}
      {todayReminders.length > 0 && (
        <>
          <Divider text="Today reminders" />
          <RemindersList
            reminders={todayReminders}
            onPreviewReminderClick={onPreviewReminderClick}
            onEditReminderClick={onEditReminderClick}
            onRemoveReminderClick={onRemoveReminderClick}
          />
        </>
      )}
      {tomorrowReminders.length > 0 && (
        <>
          <Divider text="Tomorrow reminders" />
          <RemindersList
            reminders={tomorrowReminders}
            onPreviewReminderClick={onPreviewReminderClick}
            onEditReminderClick={onEditReminderClick}
            onRemoveReminderClick={onRemoveReminderClick}
          />
        </>
      )}
      {futureReminders.length > 0 && (
        <>
          <Divider text="Future reminders" />
          <RemindersList
            reminders={futureReminders}
            onPreviewReminderClick={onPreviewReminderClick}
            onEditReminderClick={onEditReminderClick}
            onRemoveReminderClick={onRemoveReminderClick}
          />
        </>
      )}
      {reminders.length > 0 && <Divider />}
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
