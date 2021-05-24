import { configureStore } from '@reduxjs/toolkit'
import { createHashHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import logger from 'redux-logger'
import formReducer from 'pages/form/slice'

export const history = createHashHistory()

export default configureStore({
  reducer: {
    router: connectRouter(history),
    form: formReducer
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(routerMiddleware(history)).concat(logger)
  }
})