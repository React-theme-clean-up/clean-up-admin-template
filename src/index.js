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

import { Layout } from 'components/Pages/Page'
import reducer from 'ducks'

import 'resources/modules/antd/common/import.antd.cleanui.less'
import 'resources/modules/core/common/core.cleanui.css'
import 'resources/modules/vendors/common/vendors.cleanui.css'
import 'resources/modules/themes/common/themes.cleanui.css'
import 'resources/modules/menu-left/common/menu-left.cleanui.css'
import 'resources/modules/top-bar/common/top-bar.cleanui.css'
import 'resources/modules/footer/common/footer.cleanui.css'
import 'resources/modules/pages/common/pages.cleanui.css'
import 'resources/modules/apps/common/apps.cleanui.css'
import 'resources/modules/rfqueue/common/rfqueue.cleanui.css'
import 'resources/modules/antd/common/antd.cleanui.css'

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
        <Layout />
      </LocaleProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()

export default history
