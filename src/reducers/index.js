const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_APP_LOADING':
      return Object.assign({}, state, {
        appLoading: action.bool
      })
    case 'UPDATE_CLASSES_LOADING':
      return Object.assign({}, state, {
        classesLoading: action.bool
      })
    case 'UPDATE_CLASSES':
      return Object.assign({}, state, {
        classes: action.classes
      })
    case 'UPDATE_TEACHERS':
      return Object.assign({}, state, {
        teachers: action.teachers
      })
    case 'UPDATE_CURRENT_USER':
      return Object.assign({}, state, {
        currentUser: action.user
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