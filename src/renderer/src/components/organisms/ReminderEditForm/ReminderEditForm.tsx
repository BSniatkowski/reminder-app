import { IReminderItem } from '@globalTypes/reminders.types'
import { IFieldItem, EFieldTypes } from '@renderer/components/organisms/Form/Form.types'
import { IReminderEditFormProps } from './ReminderEditForm.types'
import { Form } from '../Form/Form'
import { twoWayDateFormat } from '@utils/twoWayDateFormat'
import * as S from './ReminderEditForm.style'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { EButtonSizes, EButtonVariants } from '@renderer/components/atoms/Button/Button.types'
import { useIntl } from 'react-intl'
import messages from './ReminderEditForm.messages'
import { useSelector } from 'react-redux'
import {
  selectDefaultAutoOpen,
  selectDefaultAutoPlay
} from '@renderer/store/storeSlices/settingsSlice/settingsSlice.selectors'

export const ReminderEditForm: React.FC<IReminderEditFormProps> = ({
  isFormVisible,
  hideForm,
  reminder,
  onDelete,
  onSubmit
}) => {
  const intl = useIntl()

  const defaultAutoOpen = useSelector(selectDefaultAutoOpen)
  const defaultAutoPlay = useSelector(selectDefaultAutoPlay)

  const { title, description, link, autoOpenLink, autoPlay, date } = reminder || {
    title: '',
    description: '',
    link: '',
    autoOpenLink: defaultAutoOpen,
    autoPlay: defaultAutoPlay,
    date: twoWayDateFormat(new Date())
  }

  const fields: Array<IFieldItem<IReminderItem>> = [
    {
      name: 'title',
      label: intl.formatMessage(messages.titleLabel),
      type: EFieldTypes.text,
      defaultValue: title
    },
    {
      name: 'description',
      label: intl.formatMessage(messages.descriptionLabel),
      type: EFieldTypes.textarea,
      defaultValue: description
    },
    { name: 'link', label: 'Link', type: EFieldTypes.text, defaultValue: link },
    {
      name: 'autoOpenLink',
      label: intl.formatMessage(messages.autoOpenLinkLabel),
      visibilityConditions: [
        { fieldName: 'link', condtion: (value) => typeof value === 'string' && value?.length > 0 }
      ],
      type: EFieldTypes.checkbox,
      defaultValue: autoOpenLink
    },
    {
      name: 'autoPlay',
      label: intl.formatMessage(messages.autoPlayLabel),
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
      type: EFieldTypes.checkbox,
      defaultValue: autoPlay
    },
    {
      name: 'date',
      label: intl.formatMessage(messages.dateLabel),
      type: EFieldTypes.date,
      defaultValue: date
    }
  ]

  return (
    <>
      {isFormVisible && <S.ReminderEditFormModalOverlay />}
      <S.ReminderEditFormModal $isFormVisible={isFormVisible}>
        <Button
          variant={EButtonVariants.transparent}
          size={EButtonSizes.small}
          iconVariant={EIconVariants.CLOSE}
          onClick={hideForm}
        />
        {isFormVisible && (
          <Form<IReminderItem>
            fields={fields}
            onDelete={onDelete && onDelete}
            onSubmit={onSubmit}
          />
        )}
      </S.ReminderEditFormModal>
      <S.ModalHide />
    </>
  )
}
