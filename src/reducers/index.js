const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_APP_LOADING':
      return Object.assign({}, state, {
        appLoading: action.bool
      })
    case 'UPDATE_ROLE':
      return Object.assign({}, state, {
        role: action.role
      })
    case 'UPDATE_LOGGED_IN':
      return Object.assign({}, state, {
        loggedIn: action.bool
      })
    default:
      return state
  }
}

export default reducer