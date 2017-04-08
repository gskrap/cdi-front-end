import axios from 'axios'

const HOST = 'http://cdi-api.herokuapp.com'

export const updateAppLoading = (bool) => {
  return {
    type: 'UPDATE_APP_LOADING',
    bool
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
      url: HOST + '/user_status',
      headers: {Authorization: (window.localStorage.getItem("auth_token"))}
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
  }, 2000)
}

export const logIn = (session) => dispatch => {
  dispatch(updateAppLoading(true))
  setTimeout(() => {
    return axios({
      method: 'post',
      url: HOST + '/sessions',
      data: {
        session: {
          username: session.username,
          password: session.password
        }
      }
    })
      .then((response) => {
        window.localStorage.setItem("auth_token", response.data.auth_token)
        dispatch(getPermissions())
      })
      .catch(function (error) {
        console.log(error)
        dispatch(updateAppLoading(false))
      })
  }, 2000)
}

export const logOut = () => dispatch => {
  dispatch(updateAppLoading(true))
  setTimeout(() => {
    return axios({
      method: 'delete',
      url: HOST + '/sessions/' + window.localStorage.getItem("auth_token"),
    })
      .then(() => {
        window.localStorage.removeItem("auth_token")
        dispatch(updateLoggedIn(false))
        dispatch(updateCurrentUser(null))
        dispatch(updateAppLoading(false))
      })
      .catch(function (error) {
        console.log(error)
        dispatch(updateAppLoading(false))
      })
  }, 2000)
}

// export const getClasses = () => dispatch => {
//   dispatch(updateAppLoading(true))
//   return axios.get(`http://cdi-api.herokuapp.com/dance_classes`)
//     .then((response) => {
//       setTimeout(() => {
//         dispatch(updateClasses(response.data))
//         dispatch(updateAppLoading(false))
//       }, 1000)
//     })
// }