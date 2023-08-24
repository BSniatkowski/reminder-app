import { Popup } from '@renderer/components/templates/Popup/Popup'
import { useParams } from 'react-router-dom'

export const PopupPage: React.FC = () => {
  const { id } = useParams()

  const title = `Reminder ${id}`

  return <Popup title={title} />
}
