import UserHome from '../components/UserHome'
import { connect } from 'react-redux'
import { logOut } from '../actions'

function mapStateToProps(state) {
  return {
    user: state.currentUser,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: (session) => {dispatch(logOut(session))},
  }
}

let UserHomeContainer = connect(mapStateToProps, mapDispatchToProps)(UserHome)
export default UserHomeContainer