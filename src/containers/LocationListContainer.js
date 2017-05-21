import LocationList from '../components/LocationList'
import { connect } from 'react-redux'
import { getLocations, locationCreate } from '../actions'

function mapStateToProps(state) {
  return {
    locations: state.locations,
    locationsLoading: state.locationsLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getLocations: () => {dispatch(getLocations())},
    locationCreate: (location) => {dispatch(locationCreate(location))},
  }
}

let LocationListContainer = connect(mapStateToProps, mapDispatchToProps)(LocationList)
export default LocationListContainer
