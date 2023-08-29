import { RemindersList } from '@renderer/components/organisms/RemindersList/RemindersList'

export const Main: React.FC = () => {
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
        reminders={[{ id: '0', title: 'Example 1' }]}
        onAddNewReminderClick={() => {
          console.log('add')
        }}
        onReminderEditClick={(id) => {
          console.log('edit', id)
        }}
      />
    </div>
  )
}
