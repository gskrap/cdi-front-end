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
    case 'UPDATE_GROUPS_LOADING':
      return Object.assign({}, state, {
        groupsLoading: action.bool
      })
    case 'UPDATE_LOCATIONS_LOADING':
      return Object.assign({}, state, {
        locationsLoading: action.bool
      })
    case 'UPDATE_USERS_LOADING':
      return Object.assign({}, state, {
        usersLoading: action.bool
      })
    case 'UPDATE_CLASSES':
      return Object.assign({}, state, {
        classes: action.classes
      })
    case 'UPDATE_LOCATIONS':
      return Object.assign({}, state, {
        locations: action.locations
      })
    case 'UPDATE_USERS':
      return Object.assign({}, state, {
        users: action.users
      })
    case 'UPDATE_TEACHERS':
      return Object.assign({}, state, {
        teachers: action.teachers
      })
    case 'UPDATE_GROUPS':
      return Object.assign({}, state, {
        groups: action.groups
      })
    case 'UPDATE_CURRENT_USER':
      return Object.assign({}, state, {
        currentUser: action.user
      })
    case 'UPDATE_LOGGED_IN':
      return Object.assign({}, state, {
        loggedIn: action.bool
      })
    case 'UPDATE_ADMIN_VIEW':
      return Object.assign({}, state, {
        adminView: action.view
      })
    case 'UPDATE_USER_VIEW':
      return Object.assign({}, state, {
        userView: action.view
      })
    case 'UPDATE_CLASS_SAVING':
      return Object.assign({}, state, {
        classSaving: action.bool
      })
    default:
      return state
  }
}

export default reducer
