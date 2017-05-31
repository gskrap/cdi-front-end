import ClassCard from '../components/ClassCard'
import { connect } from 'react-redux'
import { deleteClass } from '../actions'

function mapStateToProps(state) {
  return {
    user: state.currentUser,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteClass: (id) => {dispatch(deleteClass(id))},
  }
}

let ClassCardContainer = connect(mapStateToProps, mapDispatchToProps)(ClassCard)
export default ClassCardContainer
