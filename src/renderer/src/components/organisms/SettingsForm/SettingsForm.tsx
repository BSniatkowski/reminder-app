import { Text } from '@renderer/components/atoms/Text/Text'
import { Form } from '../Form/Form'
import { EFieldTypes, EStyleVariants, IFieldItem } from '../Form/Form.types'
import * as S from './SettingsForm.style'
import {
  ESettingsParts,
  EThemes,
  IDashboardSettingsFields,
  IGlobalSettingsFields,
  IReminderSettingsFields,
  ISettingsFormProps
} from './SettingsForm.types'
import { ETextTags } from '@renderer/components/atoms/Text/Text.types'
import { FormattedMessage, useIntl } from 'react-intl'
import { ELocales } from '@renderer/store/storeSlices/settingsSlice/settingsSlice.types'
import { ESortBy } from '../RemindersSearchForm/RemindersSearchForm.types'
import { EReminderSections } from '@renderer/components/pages/MainPage/MainPage.types'
import messages from './SettingsForm.messages'
import searchMessages from '../RemindersSearchForm/RemindersSearchForm.messages'
import reminderMessages from '../ReminderEditForm/ReminderEditForm.messages'

export const SettingsForm: React.FC<ISettingsFormProps> = ({ initialSettings, onSubmit }) => {
  const intl = useIntl()

  const globalSettingsFields: Array<IFieldItem<IGlobalSettingsFields>> = [
    {
      name: 'theme',
      label: intl.formatMessage(messages.themeLabel),
      type: EFieldTypes.select,
      options: [
        { id: EThemes.system, label: intl.formatMessage(messages.systemThemeLabel) },
        { id: EThemes.light, label: intl.formatMessage(messages.lightThemeLabel) },
        { id: EThemes.dark, label: intl.formatMessage(messages.darkThemeLabel) }
      ],
      defaultValue: initialSettings.theme
    },
    {
      name: 'locale',
      label: intl.formatMessage(messages.localeLabel),
      type: EFieldTypes.select,
      options: [
        { id: ELocales.en, label: intl.formatMessage(messages.localeENLabel) },
        { id: ELocales.pl, label: intl.formatMessage(messages.localePLLabel) }
      ],
      defaultValue: initialSettings.locale
    },
    {
      name: 'muteApp',
      label: intl.formatMessage(messages.muteAppLabel),
      type: EFieldTypes.checkbox,
      defaultValue: initialSettings.muteApp
    }
  ]

  const dashboardSettingsFields: Array<IFieldItem<IDashboardSettingsFields>> = [
    {
      name: 'sortBy',
      label: intl.formatMessage(searchMessages.sortByLabel),
      type: EFieldTypes.select,
      options: [
        { id: ESortBy.alphabetically, label: intl.formatMessage(searchMessages.sortByTitleLabel) },
        { id: ESortBy.closest, label: intl.formatMessage(searchMessages.sortByClosestLabel) },
        { id: ESortBy.furthest, label: intl.formatMessage(searchMessages.sortByFurthestLabel) }
      ],
      defaultValue: initialSettings.sortBy
    },
    {
      name: EReminderSections.archive,
      label: intl.formatMessage(searchMessages.archiveLabel),
      type: EFieldTypes.checkbox,
      defaultValue: initialSettings[EReminderSections.archive]
    },
    {
      name: EReminderSections.today,
      label: intl.formatMessage(searchMessages.todayLabel),
      type: EFieldTypes.checkbox,
      defaultValue: initialSettings[EReminderSections.today]
    },
    {
      name: EReminderSections.tomorrow,
      label: intl.formatMessage(searchMessages.tomorrowLabel),
      type: EFieldTypes.checkbox,
      defaultValue: initialSettings[EReminderSections.tomorrow]
    },
    {
      name: EReminderSections.future,
      label: intl.formatMessage(searchMessages.futureLabel),
      type: EFieldTypes.checkbox,
      defaultValue: initialSettings[EReminderSections.future]
    }
  ]

  const reminderSettingsFields: Array<IFieldItem<IReminderSettingsFields>> = [
    {
      name: 'autoOpenLink',
      label: intl.formatMessage(reminderMessages.autoOpenLinkLabel),
      type: EFieldTypes.checkbox,
      defaultValue: initialSettings.autoOpenLink
    },
    {
      name: 'autoPlay',
      label: intl.formatMessage(reminderMessages.autoPlayLabel),
      type: EFieldTypes.checkbox,
      defaultValue: initialSettings.autoPlay
    }
  ]

  return (
    <S.SettingsFormWrapper>
      <S.SettingsPartWrapper>
        <S.SettingsPartTitleWrapper>
          <S.SettingsPartDot />
          <Text as={ETextTags.h3}>
            <FormattedMessage {...messages.globalSettingsTitle} />
          </Text>
        </S.SettingsPartTitleWrapper>
        <Form<IGlobalSettingsFields>
          fields={globalSettingsFields}
          submitOnChange
          onSubmit={(values) => {
            onSubmit({ ...values, part: ESettingsParts.global })
          }}
          styleVariant={EStyleVariants.settings}
        />
      </S.SettingsPartWrapper>
      <S.SettingsPartWrapper>
        <S.SettingsPartTitleWrapper>
          <S.SettingsPartDot />
          <Text as={ETextTags.h3}>
            <FormattedMessage {...messages.dashboardSettingsTitle} />
          </Text>
        </S.SettingsPartTitleWrapper>
        <Form<IDashboardSettingsFields>
          fields={dashboardSettingsFields}
          submitOnChange
          onSubmit={(values) => {
            onSubmit({ ...values, part: ESettingsParts.dashboard })
          }}
          styleVariant={EStyleVariants.settings}
        />
      </S.SettingsPartWrapper>
      <S.SettingsPartWrapper>
        <S.SettingsPartTitleWrapper>
          <S.SettingsPartDot />
          <Text as={ETextTags.h3}>
            <FormattedMessage {...messages.reminderSettingsTitle} />
          </Text>
        </S.SettingsPartTitleWrapper>
        <Form<IReminderSettingsFields>
          fields={reminderSettingsFields}
          submitOnChange
          onSubmit={(values) => {
            onSubmit({ ...values, part: ESettingsParts.reminder })
          }}
          styleVariant={EStyleVariants.settings}
        />
      </S.SettingsPartWrapper>
    </S.SettingsFormWrapper>
  )
}
