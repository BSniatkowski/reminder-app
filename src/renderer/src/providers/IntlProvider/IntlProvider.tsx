import { selectLanguage } from '@renderer/store/storeSlices/settingsSlice/settingsSlice.selectors'
import { ELanguages } from '@renderer/store/storeSlices/settingsSlice/settingsSlice.types'
import { IntlProvider as ReactIntlProvider } from 'react-intl'
import { useSelector } from 'react-redux'

export interface IIntlProvider {
  children: React.ReactNode
}

export const IntlProvider: React.FC<IIntlProvider> = ({ children }) => {
  const locale = useSelector(selectLanguage)

  return (
    <ReactIntlProvider locale={locale} defaultLocale={ELanguages.en}>
      {children}
    </ReactIntlProvider>
  )
}
