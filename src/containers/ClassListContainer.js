import ClassList from '../components/ClassList'
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

let ClassListContainer = connect(mapStateToProps, mapDispatchToProps)(ClassList)
export default ClassListContainer
