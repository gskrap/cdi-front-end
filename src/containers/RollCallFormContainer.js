import RollCallForm from '../components/RollCallForm'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

let RollCallFormContainer = connect(mapStateToProps, mapDispatchToProps)(RollCallForm)
export default RollCallFormContainer
