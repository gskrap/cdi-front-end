import App from '../components/App'
import { connect } from 'react-redux'
import { getPermissions } from '../actions'

function mapStateToProps(state) {
  return {
    appLoading: state.appLoading,
    classesLoading: state.classesLoading,
    teachersLoading: state.teachersLoading,
    adminView: state.adminView,
    userView: state.userView,
    teachers: state.teachers,
    anythingLoading: (
      state.appLoading ||
      state.classesLoading ||
      state.groupsLoading ||
      state.locationsLoading ||
      state.usersLoading ||
      state.teachersLoading
    ),
    loggedIn: state.loggedIn,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPermissions: () => {dispatch(getPermissions())},
  }
}

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer
