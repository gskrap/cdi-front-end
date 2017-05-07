import axios from 'axios'

const API = 'https://cdi-api.herokuapp.com'

export const updateAppLoading = (bool) => {
  return {
    type: 'UPDATE_APP_LOADING',
    bool
  }
}

export const updateClassesLoading = (bool) => {
  return {
    type: 'UPDATE_CLASSES_LOADING',
    bool
  }
}

export const updateUsersLoading = (bool) => {
  return {
    type: 'UPDATE_USERS_LOADING',
    bool
  }
}

export const updateClasses = (classes) => {
  return {
    type: 'UPDATE_CLASSES',
    classes
  }
}

export const updateUsers = (users) => {
  return {
    type: 'UPDATE_USERS',
    users
  }
}

export const updateTeachers = (teachers) => {
  return {
    type: 'UPDATE_TEACHERS',
    teachers
  }
}

export const updateGroups = (groups) => {
  return {
    type: 'UPDATE_GROUPS',
    groups
  }
}

export const updateCurrentUser = (user) => {
  return {
    type: 'UPDATE_CURRENT_USER',
    user
  }
}

export const updateLoggedIn = (bool) => {
  return {
    type: 'UPDATE_LOGGED_IN',
    bool
  }
}

export const getPermissions = () => dispatch => {
  dispatch(updateAppLoading(true))
  setTimeout(() => {
    return axios({
      method: 'get',
      url: API + '/user_status',
      headers: {Authorization: (window.localStorage.getItem('auth_token'))}
    })
      .then((response) => {
        dispatch(updateCurrentUser(response.data.user))
        dispatch(updateLoggedIn(response.data.loggedIn))
        dispatch(updateAppLoading(false))
      })
      .catch(function (error) {
        console.log(error)
        dispatch(updateAppLoading(false))
      })
  }, 1000)
}

export const logIn = (session) => dispatch => {
  dispatch(updateAppLoading(true))
  setTimeout(() => {
    return axios({
      method: 'post',
      url: API + '/sessions',
      data: {session}
    })
      .then((response) => {
        window.localStorage.setItem('auth_token', response.data.auth_token)
        dispatch(getPermissions())
      })
      .catch(function (error) {
        console.log(error)
        dispatch(updateAppLoading(false))
      })
  }, 1000)
}

export const register = (user) => dispatch => {
  dispatch(updateAppLoading(true))
  setTimeout(() => {
    return axios({
      method: 'post',
      url: API + '/users',
      data: {user}
    })
      .then((response) => {
        window.localStorage.setItem('auth_token', response.data.auth_token)
        dispatch(getPermissions())
      })
      .catch(function (error) {
        console.log(error)
        dispatch(updateAppLoading(false))
      })
  }, 1000)
}

export const logOut = () => dispatch => {
  dispatch(updateAppLoading(true))
  setTimeout(() => {
    return axios({
      method: 'delete',
      url: API + '/sessions/' + window.localStorage.getItem('auth_token'),
    })
      .then(() => {
        window.localStorage.removeItem('auth_token')
        dispatch(updateLoggedIn(false))
        dispatch(updateCurrentUser(null))
        dispatch(updateAppLoading(false))
      })
      .catch(function (error) {
        console.log(error)
        dispatch(updateAppLoading(false))
      })
  }, 1000)
}

export const getClasses = (_prefix) => dispatch => {
  dispatch(updateClassesLoading(true))
  let prefix = _prefix ? _prefix : ''
  return axios.get(`https://cdi-api.herokuapp.com${prefix}/dance_classes`)
    .then((response) => {
      setTimeout(() => {
        dispatch(updateClasses(response.data))
        dispatch(updateClassesLoading(false))
      }, 1000)
    })
}

export const getUsers = () => dispatch => {
  dispatch(updateUsersLoading(true))
  return axios.get(`https://cdi-api.herokuapp.com/users`)
    .then((response) => {
      setTimeout(() => {
        dispatch(updateUsers(response.data))
        dispatch(updateUsersLoading(false))
      }, 1000)
    })
}

export const classCreate = (dance_class) => dispatch => {
  dispatch(updateAppLoading(true))
  setTimeout(() => {
    return axios({
      method: 'post',
      url: API + '/dance_classes',
      data: {dance_class}
    })
      .then(() => {
        dispatch(updateAppLoading(false))
      })
      .catch(function (error) {
        console.log(error)
        dispatch(updateAppLoading(false))
      })
  }, 1000)
}

export const getTeachers = () => dispatch => {
  return axios.get('https://cdi-api.herokuapp.com/teachers')
    .then((response) => {
      setTimeout(() => {
        dispatch(updateTeachers(response.data))
      }, 1000)
    })
}

export const getGroups = () => dispatch => {
  return axios.get('https://cdi-api.herokuapp.com/groups')
    .then((response) => {
      setTimeout(() => {
        dispatch(updateGroups(response.data))
      }, 1000)
    })
}
