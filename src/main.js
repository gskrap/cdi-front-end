/*eslint-disable no-unused-vars*/
import React from 'react'
/*eslint-enable no-unused-vars*/
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import AppContainer from './containers/AppContainer'

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app-root')
)