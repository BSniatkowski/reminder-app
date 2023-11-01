import { SettingsForm } from '@renderer/components/organisms/SettingsForm/SettingsForm'
import { ISettingsProps } from './Settings.types'

export const Settings: React.FC<ISettingsProps> = ({ initialSettings, onSubmit }) => {
  return <SettingsForm initialSettings={initialSettings} onSubmit={onSubmit} />
}
