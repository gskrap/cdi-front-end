import ClassCreateForm from '../components/ClassCreateForm'
import { connect } from 'react-redux'
import { classCreate, getLocations, getTeachers, getGroups } from '../actions'

function mapStateToProps(state) {
  return {
    groups: state.groups,
    locations: state.locations,
    teachers: state.teachers,
    groupsLoading: state.groupsLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    classCreate: (dance_class) => {dispatch(classCreate(dance_class))},
    getGroups: () => {dispatch(getGroups())},
    getLocations: () => {dispatch(getLocations())},
    getTeachers: () => {dispatch(getTeachers())},
  }
}

let ClassCreateFormContainer = connect(mapStateToProps, mapDispatchToProps)(ClassCreateForm)
export default ClassCreateFormContainer
