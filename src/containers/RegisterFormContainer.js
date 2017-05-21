import RegisterForm from '../components/RegisterForm'
import { connect } from 'react-redux'
import { register } from '../actions'

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    register: (user) => {dispatch(register(user))},
  }
}

let RegisterFormContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
export default RegisterFormContainer
