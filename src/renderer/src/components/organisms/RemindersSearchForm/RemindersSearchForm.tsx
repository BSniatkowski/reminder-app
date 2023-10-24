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

export const RemindersSearchForm: React.FC<IRemindersSearchFormProps> = ({
  isFormVisible,
  toggleFormVisibility,
  onSubmit
}) => {
  const fields: Array<IFieldItem<IRemindersSearchFormValues>> = [
    { name: 'search', label: 'Search', type: EFieldType.text, defaultValue: '' },
    {
      name: EReminderSections.archive,
      label: 'Archive reminders',
      type: EFieldType.checkbox,
      defaultValue: false
    },
    {
      name: EReminderSections.today,
      label: 'Today reminders',
      type: EFieldType.checkbox,
      defaultValue: true
    },
    {
      name: EReminderSections.tomorrow,
      label: 'Tomorrow reminders',
      type: EFieldType.checkbox,
      defaultValue: true
    },
    {
      name: EReminderSections.future,
      label: 'Future reminders',
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
