import LogInForm from '../components/LogInForm'
import { connect } from 'react-redux'
import { logIn, logOut } from '../actions'

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    logIn: (session) => {dispatch(logIn(session))},
    logOut: () => {dispatch(logOut())},
  }
}

let LogInFormContainer = connect(mapStateToProps, mapDispatchToProps)(LogInForm)
export default LogInFormContainer