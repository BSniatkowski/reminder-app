import {
  ESettingsParts,
  TSettingsFormValues
} from '@renderer/components/organisms/SettingsForm/SettingsForm.types'
import { Settings } from '@renderer/components/templates/Settings/Settings'
import {
  setDashboard,
  setGlobal,
  setReminder
} from '@renderer/store/storeSlices/settingsSlice/settingsSlice'
import { selectAllSettings } from '@renderer/store/storeSlices/settingsSlice/settingsSlice.selectors'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const SettingsPage = () => {
  const initialSettings = useSelector(selectAllSettings)

  const dispatch = useDispatch()

  const onSubmit = useCallback<(formValues: TSettingsFormValues) => void>(
    (values) => {
      switch (values.part) {
        case ESettingsParts.global: {
          dispatch(setGlobal(values))
          break
        }
        case ESettingsParts.dashboard: {
          dispatch(setDashboard(values))

          break
        }
        case ESettingsParts.reminder: {
          dispatch(setReminder(values))
          break
        }
        default: {
          break
        }
      }
    },
    [dispatch]
  )

  return <Settings initialSettings={initialSettings} onSubmit={onSubmit} />
}
