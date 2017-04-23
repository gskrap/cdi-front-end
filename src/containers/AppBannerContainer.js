import AppBanner from '../components/AppBanner'
import { connect } from 'react-redux'
import { logOut } from '../actions'

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: (session) => {dispatch(logOut(session))},
  }
}

let AppBannerContainer = connect(mapStateToProps, mapDispatchToProps)(AppBanner)
export default AppBannerContainer