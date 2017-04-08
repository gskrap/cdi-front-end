import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from '../reducers'

function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk, createLogger())
  )
  return store
}

const store = configureStore({
  loggedIn: false,
  role: null,
  appLoading: true,
  classes: [],
})

export { store }