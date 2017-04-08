import App from '../components/App'
import { connect } from 'react-redux'
import { getPermissions, logOut } from '../actions'

function mapStateToProps(state) {
  return {
    appLoading: state.appLoading,
    loggedIn: state.loggedIn,
    user: state.currentUser,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPermissions: () => {dispatch(getPermissions())},
  }
}

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer