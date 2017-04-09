import UserSchedule from '../components/UserSchedule'
import { connect } from 'react-redux'
import { getClasses } from '../actions'

function mapStateToProps(state) {
  return {
    user: state.currentUser,
    classes: state.classes,
    classesLoading: state.classesLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getClasses: (_prefix) => {dispatch(getClasses(_prefix))},
  }
}

let UserScheduleContainer = connect(mapStateToProps, mapDispatchToProps)(UserSchedule)
export default UserScheduleContainer