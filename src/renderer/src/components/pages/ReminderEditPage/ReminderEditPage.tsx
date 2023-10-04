import { IReminderItem } from '@globalTypes/reminders.types'
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
    reminder: { id, title, description, date }
  } = useLoaderData() as { reminder: IReminderItem }

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const onSubmit: TOnSubmit<IReminderItem> = (formValues) => {
    const { title, description, date } = formValues

    dispatch(
      id
        ? updateReminder({ id, title, description, date })
        : addReminder({ title, description, date })
    )
    navigate(id ? `/reminder/${id}` : '/')
  }

  const fields: Array<IFieldItem<IReminderItem>> = [
    { name: 'title', label: 'Title', type: EFieldType.text, defaultValue: title },
    {
      name: 'description',
      label: 'Description',
      type: EFieldType.textarea,
      defaultValue: description
    },
    { name: 'date', label: 'Date', type: EFieldType.date, defaultValue: date }
  ]

  return <ReminderEdit<IReminderItem> fields={fields} onSubmit={onSubmit} />
}
