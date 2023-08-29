import { Tile } from '@renderer/components/atoms/Tile/Tile'
import { IReminder } from './Reminder.types'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EButtonSizes, EButtonVariants } from '@renderer/components/atoms/Button/Button.types'
import { ETileContentDirections } from '@renderer/components/atoms/Tile/Tile.types'

export const Reminder: React.FC<IReminder> = ({ id, title, onReminderEditClick }) => {
  return (
    <Tile contentDirection={ETileContentDirections.column}>
      <span>{title}</span>
      <Button
        variant={EButtonVariants.light}
        size={EButtonSizes.small}
        text="Edit reminder"
        onClick={() => onReminderEditClick(id)}
      />
    </Tile>
  )
}
