import { Tile } from '@atoms/Tile/Tile'
import { IReminderProps } from './Reminder.types'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EButtonSizes, EButtonVariants } from '@renderer/components/atoms/Button/Button.types'
import { ETileContentDirections } from '@renderer/components/atoms/Tile/Tile.types'
import { Text } from '@renderer/components/atoms/Text/Text'

export const Reminder: React.FC<IReminderProps> = ({ id, title, onReminderEditClick }) => {
  return (
    <Tile contentDirection={ETileContentDirections.column}>
      <Text>{title}</Text>
      <Button
        variant={EButtonVariants.light}
        size={EButtonSizes.small}
        text="Edit reminder"
        onClick={() => onReminderEditClick(id)}
      />
    </Tile>
  )
}
