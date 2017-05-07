import ClassCreateForm from '../components/ClassCreateForm'
import { connect } from 'react-redux'
import { classCreate, getTeachers, getGroups } from '../actions'

function mapStateToProps(state) {
  return {
    teachers: state.teachers,
    groups: state.groups
  }
}

function mapDispatchToProps(dispatch) {
  return {
    classCreate: (dance_class) => {dispatch(classCreate(dance_class))},
    getTeachers: () => {dispatch(getTeachers())},
    getGroups: () => {dispatch(getGroups())}
  }
}

let ClassCreateFormContainer = connect(mapStateToProps, mapDispatchToProps)(ClassCreateForm)
export default ClassCreateFormContainer
