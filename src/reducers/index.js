const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return Object.assign({}, state, {
        color: action.color
      })
    case 'UPDATE_APP_LOADING':
      return Object.assign({}, state, {
        appLoading: action.bool
      })
    case 'UPDATE_CLASSES':
      return Object.assign({}, state, {
        classes: action.classes
      })
    default:
      return state
  }
}

export default reducer