// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createHashHistory'
import FastClick from 'fastclick'
import injectTapEventPlugin from 'react-tap-event-plugin'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import 'es6-promise/auto'
import 'setimmediate'
import 'chartist-plugin-tooltip'

import { LocaleProvider } from 'antd'
import enGB from 'antd/lib/locale-provider/en_GB'
import registerServiceWorker from 'registerServiceWorker'

import AppLayout from 'app/Layout/Layout'
import reducer from 'ducks'

import 'resources/_antd.less' // redefinition Ant Design variables
import 'bootstrap/dist/css/bootstrap.min.css'

import 'resources/AntStyles/AntDesign/antd.cleanui.css'
import 'resources/CleanStyles/Core/core.cleanui.css'
import 'resources/CleanStyles/Vendors/vendors.cleanui.css'

const history = createHistory()
const router = routerMiddleware(history)
const middlewares = [router, thunk]
const isLogger = false
if (isLogger && process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)))

FastClick.attach(document.body)
injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LocaleProvider locale={enGB}>
        <AppLayout />
      </LocaleProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()

export default history
