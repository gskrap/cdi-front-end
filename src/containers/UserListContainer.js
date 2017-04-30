import UserList from '../components/UserList'
import { connect } from 'react-redux'
import { getUsers } from '../actions'

function mapStateToProps(state) {
  return {
    users: state.users,
    usersLoading: state.usersLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => {dispatch(getUsers())},
  }
}

let UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList)
export default UserListContainer