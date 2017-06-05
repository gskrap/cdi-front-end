import ClassEditForm from '../components/ClassEditForm'
import { connect } from 'react-redux'
import { classUpdate, getLocations, getTeachers } from '../actions'

function mapStateToProps(state) {
  return {
    locations: state.locations,
    teachers: state.teachers,
    classSaving: state.classSaving,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    classUpdate: (dance_class) => {dispatch(classUpdate(dance_class))},
    getLocations: () => {dispatch(getLocations())},
    getTeachers: () => {dispatch(getTeachers())},
  }
}

let ClassEditFormContainer = connect(mapStateToProps, mapDispatchToProps)(ClassEditForm)
export default ClassEditFormContainer
