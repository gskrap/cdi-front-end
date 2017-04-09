import LogInForm from '../components/LogInForm'
import { connect } from 'react-redux'
import { logIn } from '../actions'

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    logIn: (session) => {dispatch(logIn(session))},
  }
}

let LogInFormContainer = connect(mapStateToProps, mapDispatchToProps)(LogInForm)
export default LogInFormContainer