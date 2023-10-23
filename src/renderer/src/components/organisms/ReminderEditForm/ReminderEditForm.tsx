import { IReminderItem } from '@globalTypes/reminders.types'
import { IFieldItem, EFieldType } from '@renderer/components/organisms/Form/Form.types'
import { IReminderEditFormProps } from './ReminderEditForm.types'
import { Form } from '../Form/Form'
import { twoWayDateFormat } from '@utils/twoWayDateFormat'
import * as S from './ReminderEditForm.style'

export const ReminderEditForm: React.FC<IReminderEditFormProps> = ({
  isFormVisible,
  reminder,
  onDelete,
  onSubmit
}) => {
  const { title, description, link, autoOpenLink, autoPlay, date } = reminder || {
    title: '',
    description: '',
    link: '',
    autoOpenLink: false,
    autoPlay: false,
    date: twoWayDateFormat(new Date())
  }

  const fields: Array<IFieldItem<IReminderItem>> = [
    { name: 'title', label: 'Title', type: EFieldType.text, defaultValue: title },
    {
      name: 'description',
      label: 'Description',
      type: EFieldType.textarea,
      defaultValue: description
    },
    { name: 'link', label: 'Link', type: EFieldType.text, defaultValue: link },
    {
      name: 'autoOpenLink',
      label: 'Open link at reminder show',
      visibilityConditions: [
        { fieldName: 'link', condtion: (value) => typeof value === 'string' && value?.length > 0 }
      ],
      type: EFieldType.checkbox,
      defaultValue: autoOpenLink
    },
    {
      name: 'autoPlay',
      label: 'Autoplay video',
      visibilityConditions: [
        {
          fieldName: 'link',
          condtion: (value) =>
            typeof value === 'string' &&
            value?.length > 0 &&
            !!value?.match(
              /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/gm
            )
        }
      ],
      type: EFieldType.checkbox,
      defaultValue: autoPlay
    },
    { name: 'date', label: 'Date', type: EFieldType.date, defaultValue: date }
  ]

  return (
    <>
      {isFormVisible && <S.ReminderEditFormModalOverlay />}
      <S.ReminderEditFormModal $isFormVisible={isFormVisible}>
        {isFormVisible && (
          <Form<IReminderItem>
            fields={fields}
            onDelete={onDelete && onDelete}
            onSubmit={onSubmit}
          />
        )}
      </S.ReminderEditFormModal>
    </>
  )
}
