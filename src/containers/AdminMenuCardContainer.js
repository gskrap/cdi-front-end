import AdminMenuCard from '../components/AdminMenuCard'
import { connect } from 'react-redux'
import { getClasses, updateAdminView } from '../actions'

function mapStateToProps(state) {
  return {
    adminView: state.adminView
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getClasses: (prefix) => {dispatch(getClasses(prefix))},
    updateAdminView: (view) => {dispatch(updateAdminView(view))},
  }
}

let AdminMenuCardContainer = connect(mapStateToProps, mapDispatchToProps)(AdminMenuCard)
export default AdminMenuCardContainer
