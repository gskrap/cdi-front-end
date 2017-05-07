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
  appLoading: false,
  classesLoading: false,
  usersLoading: false,
  loggedIn: false,
  currentUser: null,
  users: [],
  classes: [],
  teachers: [],
  groups: []
})

export { store }
