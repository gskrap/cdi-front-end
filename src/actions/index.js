import axios from 'axios'

export const changeColor = (color) => {
  return {
    type: 'CHANGE_COLOR',
    color
  }
}

export const updateAppLoading = (bool) => {
  return {
    type: 'UPDATE_APP_LOADING',
    bool
  }
}

export const updateClasses = (classes) => {
  return {
    type: 'UPDATE_CLASSES',
    classes
  }
}

export const getClasses = () => dispatch => {
  dispatch(updateAppLoading(true))
  return axios.get(`http://cdi-api.herokuapp.com/dance_classes`)
    .then((response) => {
      setTimeout(() => {
        dispatch(updateClasses(response.data))
        dispatch(updateAppLoading(false))
      }, 1000)
    })
}