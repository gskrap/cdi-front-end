import App from '../components/app'
import { connect } from 'react-redux'
import { changeColor, getClasses } from '../actions'

function mapStateToProps(state) {
  return {
    appLoading: state.appLoading,
    color: state.color,
    classes: state.classes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeColor: (color) => {dispatch(changeColor(color))},
    getClasses: (classes) => {dispatch(getClasses(classes))}
  }
}

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer