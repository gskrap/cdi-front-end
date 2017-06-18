import UserList from '../components/UserList'
import { connect } from 'react-redux'
import { getUsers, getUsersInitial } from '../actions'

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    users: state.users,
    usersLoading: state.usersLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => {dispatch(getUsers())},
    getUsersInitial: () => {dispatch(getUsersInitial())},
  }
}

let UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList)
export default UserListContainer
