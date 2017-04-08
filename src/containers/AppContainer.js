import App from '../components/App'
import { connect } from 'react-redux'
import { getPermissions } from '../actions'

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    role: state.role,
    appLoading: state.appLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPermissions: () => {dispatch(getPermissions())},
  }
}

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer