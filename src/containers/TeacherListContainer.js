import UserList from '../components/UserList'
import { connect } from 'react-redux'
import { getTeachers } from '../actions'

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    users: state.teachers,
    usersLoading: state.teachersLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => {dispatch(getTeachers())},
    getUsersInitial: () => {dispatch(getTeachers())},
  }
}

let TeacherListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList)
export default TeacherListContainer
