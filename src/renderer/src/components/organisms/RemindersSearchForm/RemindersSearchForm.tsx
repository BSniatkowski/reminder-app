import {
  IFieldItem,
  EFieldType,
  EStyleVariants
} from '@renderer/components/organisms/Form/Form.types'
import { IRemindersSearchFormProps, IRemindersSearchFormValues } from './RemindersSearchForm.types'
import { Form } from '../Form/Form'
import * as S from './RemindersSearchForm.style'
import { Icon } from '@renderer/components/atoms/Icon/Icon'
import { EIconSizes, EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { EReminderSections } from '@renderer/components/pages/MainPage.tsx/MainPage.types'
import { useIntl } from 'react-intl'
import messages from './RemindersSearchForm.messages'

export const RemindersSearchForm: React.FC<IRemindersSearchFormProps> = ({
  isFormVisible,
  toggleFormVisibility,
  onSubmit
}) => {
  const intl = useIntl()

  const fields: Array<IFieldItem<IRemindersSearchFormValues>> = [
    {
      name: 'search',
      label: intl.formatMessage(messages.searchLabel),
      type: EFieldType.text,
      defaultValue: ''
    },
    {
      name: EReminderSections.archive,
      label: intl.formatMessage(messages.archiveLabel),
      type: EFieldType.checkbox,
      defaultValue: false
    },
    {
      name: EReminderSections.today,
      label: intl.formatMessage(messages.todayLabel),
      type: EFieldType.checkbox,
      defaultValue: true
    },
    {
      name: EReminderSections.tomorrow,
      label: intl.formatMessage(messages.tomorrowLabel),
      type: EFieldType.checkbox,
      defaultValue: true
    },
    {
      name: EReminderSections.future,
      label: intl.formatMessage(messages.futureLabel),
      type: EFieldType.checkbox,
      defaultValue: true
    }
  ]

  return (
    <>
      <S.RemindersSearchFormModal $isFormVisible={isFormVisible}>
        <S.RemindersSearchFormToggleButton
          $isFormVisible={isFormVisible}
          onClick={toggleFormVisibility}
        >
          <Icon variant={EIconVariants.ARR_LEFT} size={EIconSizes.small} />
        </S.RemindersSearchFormToggleButton>
        <Form<IRemindersSearchFormValues>
          styleVariant={EStyleVariants.search}
          fields={fields}
          onSubmit={onSubmit}
          submitOnChange
        />
      </S.RemindersSearchFormModal>
      <S.ModalHide />
    </>
  )
}
