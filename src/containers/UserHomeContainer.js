import UserHome from '../components/UserHome'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    user: state.currentUser,
  }
}

function mapDispatchToProps() {
  return {
  }
}

let UserHomeContainer = connect(mapStateToProps, mapDispatchToProps)(UserHome)
export default UserHomeContainer