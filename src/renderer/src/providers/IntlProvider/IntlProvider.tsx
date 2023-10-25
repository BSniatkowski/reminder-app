import { selectLanguage } from '@renderer/store/storeSlices/settingsSlice/settingsSlice.selectors'
import { ELocales } from '@renderer/store/storeSlices/settingsSlice/settingsSlice.types'
import { useEffect, useState } from 'react'
import { IntlProvider as ReactIntlProvider } from 'react-intl'
import { useSelector } from 'react-redux'
export interface IIntlProvider {
  children: React.ReactNode
}

export const IntlProvider: React.FC<IIntlProvider> = ({ children }) => {
  const locale = useSelector(selectLanguage)
  const [messages, setMessages] = useState({})

  useEffect(() => {
    const fetchMessages = async () => {
      switch (locale) {
        case ELocales.pl: {
          setMessages(await import('./localesCompiled/pl.json'))
          break
        }
        case ELocales.en: {
          setMessages(await import('./localesCompiled/en.json'))
          break
        }
        default: {
          setMessages(await import('./localesCompiled/en.json'))
          break
        }
      }
    }

    fetchMessages()
  }, [locale])

  return (
    <ReactIntlProvider locale={locale} messages={messages} defaultLocale={ELocales.en}>
      {children}
    </ReactIntlProvider>
  )
}
