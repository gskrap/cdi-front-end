import axios from 'axios'

const HOST = 'http://cdi-api.herokuapp.com'

export const updateAppLoading = (bool) => {
  return {
    type: 'UPDATE_APP_LOADING',
    bool
  }
}

export const updateRole = (role) => {
  return {
    type: 'UPDATE_ROLE',
    role
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
  return axios({
    method: 'get',
    url: HOST + '/user_status',
    headers: {Authorization: (window.localStorage.getItem("auth_token"))}
  })
    .then((response) => {
      dispatch(updateLoggedIn(response.data.loggedIn))
      dispatch(updateRole(response.data.role))
      dispatch(updateAppLoading(false))
    })
    .catch(function (error) {
      console.log(error)
      dispatch(updateAppLoading(false))
    })
}

export const logIn = (session) => dispatch => {
  dispatch(updateAppLoading(true))
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
      dispatch(updateAppLoading(false))
    })
    .catch(function (error) {
      console.log(error)
      dispatch(updateAppLoading(false))
    })
}

export const logOut = () => dispatch => {
  dispatch(updateAppLoading(true))
  return axios({
    method: 'delete',
    url: HOST + '/sessions/' + window.localStorage.getItem("auth_token"),
  })
    .then(() => {
      window.localStorage.removeItem("auth_token")
      dispatch(updateLoggedIn(false))
      dispatch(updateRole(null))
      dispatch(updateAppLoading(false))
    })
    .catch(function (error) {
      console.log(error)
      dispatch(updateAppLoading(false))
    })
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