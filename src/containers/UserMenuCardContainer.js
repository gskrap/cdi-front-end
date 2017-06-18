import UserMenuCard from '../components/UserMenuCard'
import { connect } from 'react-redux'
import { getClasses, updateUserView } from '../actions'

function mapStateToProps(state) {
  return {
    user: state.currentUser,
    userView: state.userView
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateUserView: (view) => {dispatch(updateUserView(view))},
    getClasses: (prefix) => {dispatch(getClasses(prefix))},
  }
}

let UserMenuCardContainer = connect(mapStateToProps, mapDispatchToProps)(UserMenuCard)
export default UserMenuCardContainer
