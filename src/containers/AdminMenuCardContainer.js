import AdminMenuCard from '../components/AdminMenuCard'
import { connect } from 'react-redux'
import { updateAdminView } from '../actions'

function mapStateToProps(state) {
  return {
    adminView: state.adminView
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateAdminView: (view) => {dispatch(updateAdminView(view))},
  }
}

let AdminMenuCardContainer = connect(mapStateToProps, mapDispatchToProps)(AdminMenuCard)
export default AdminMenuCardContainer
