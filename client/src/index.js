import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, useDispatch } from 'react-redux'

import store from './app/store'
import routes from './routes'
import reportWebVitals from 'reportWebVitals'
import { I18nProvider, LOCALES } from 'i18n'
import Navbar from 'components/navbar/index'
import App from 'App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()