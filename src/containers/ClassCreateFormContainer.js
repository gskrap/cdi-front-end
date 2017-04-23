import ClassCreateForm from '../components/ClassCreateForm'
import { connect } from 'react-redux'
import { classCreate, getTeachers } from '../actions'

function mapStateToProps(state) {
  return {
    teachers: state.teachers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    classCreate: (dance_class) => {dispatch(classCreate(dance_class))},
    getTeachers: () => {dispatch(getTeachers())}
  }
}

let ClassCreateFormContainer = connect(mapStateToProps, mapDispatchToProps)(ClassCreateForm)
export default ClassCreateFormContainer