import { IReminderItem, IReminderItemBody } from '@globalTypes/reminders.types'
import { IFieldItem, EFieldType, TOnSubmit } from '@renderer/components/organisms/Form/Form.types'
import { ReminderEdit } from '@renderer/components/templates/ReminderEdit/ReminderEdit'
import {
  addReminder,
  updateReminder
} from '@renderer/store/storeSlices/reminderSlice/remindersSlice'
import { useDispatch } from 'react-redux'
import { useLoaderData, useNavigate } from 'react-router-dom'

export const ReminderEditPage = () => {
  const {
    reminder: { id, title, description, link, autoOpenLink, autoPlay, date }
  } = useLoaderData() as { reminder: IReminderItem }

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const onSubmit: TOnSubmit<IReminderItemBody> = (formValues) => {
    dispatch(id ? updateReminder({ id, ...formValues }) : addReminder(formValues))
    navigate('/')
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
      type: EFieldType.checkbox,
      defaultValue: autoOpenLink
    },
    {
      name: 'autoPlay',
      label: 'Autoplay video',
      type: EFieldType.checkbox,
      defaultValue: autoPlay
    },
    { name: 'date', label: 'Date', type: EFieldType.date, defaultValue: date }
  ]

  return <ReminderEdit<IReminderItem> fields={fields} onSubmit={onSubmit} />
}
