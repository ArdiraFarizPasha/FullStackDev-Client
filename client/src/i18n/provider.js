import React, { Fragment } from 'react'
import { IntlProvider } from 'react-intl'
import { LOCALES } from './locales'
import messages from 'i18n/messages/index'

const Provider = ({ children, locale = LOCALES.INDONESIA}) => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>
)

export default Provider