import AdminSchedule from '../components/AdminSchedule'
import { connect } from 'react-redux'
import { getClasses } from '../actions'

function mapStateToProps(state) {
  return {
    classes: state.classes,
    classesLoading: state.classesLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getClasses: () => {dispatch(getClasses())},
  }
}

let AdminScheduleContainer = connect(mapStateToProps, mapDispatchToProps)(AdminSchedule)
export default AdminScheduleContainer
