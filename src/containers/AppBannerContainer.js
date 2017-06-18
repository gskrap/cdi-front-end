import AppBanner from '../components/AppBanner'
import { connect } from 'react-redux'
import { logOut, getClasses, updateAdminView, updateUserView } from '../actions'

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    user: state.currentUser,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: (session) => {dispatch(logOut(session))},
    getClasses: (prefix) => {dispatch(getClasses(prefix))},
    updateAdminView: (view) => {dispatch(updateAdminView(view))},
    updateUserView: (view) => {dispatch(updateUserView(view))},
  }
}

let AppBannerContainer = connect(mapStateToProps, mapDispatchToProps)(AppBanner)
export default AppBannerContainer
