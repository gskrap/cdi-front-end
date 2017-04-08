import UserMenuCard from '../components/UserMenuCard'
import { connect } from 'react-redux'
import { getClasses, logOut } from '../actions'

function mapStateToProps(state) {
  return {
    user: state.currentUser,
    classes: state.classes,
    classesLoading: state.classesLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getClasses: (_prefix) => {dispatch(getClasses(_prefix))},
    logOut: (session) => {dispatch(logOut(session))},
  }
}

let UserMenuCardContainer = connect(mapStateToProps, mapDispatchToProps)(UserMenuCard)
export default UserMenuCardContainer