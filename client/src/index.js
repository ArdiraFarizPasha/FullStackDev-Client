import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, useDispatch } from 'react-redux'

import store from './app/store'
import routes from './routes'
import reportWebVitals from 'reportWebVitals'
import { I18nProvider, LOCALES } from 'i18n'
import Navbar from 'components/navbar/index'

ReactDOM.render(
  <React.StrictMode>
    <I18nProvider locale={LOCALES.INDONESIA}>
      <Provider store={store}>
        <Navbar />
        {routes()}
      </Provider>
    </I18nProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()