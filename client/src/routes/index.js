import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../app/store'

import Home from 'pages/home/home'
import PersonalForm from 'pages/personal/personal'
import TestForm from 'pages/form/form'
import CompletePage from 'pages/complete/complete'

const routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route
        exact path='/' render={() => {
          return <Home />
        }}
      />
      <Route
        exact path='/personal' render={() => {
          return <PersonalForm />
        }}
      />
       <Route
        exact path='/form' render={() => {
          return <TestForm />
        }}
      />
      <Route
        exact path='/complete' render={() => {
          return <CompletePage />
        }}
      />
    </Switch>
  </ConnectedRouter>
)

export default routes 
