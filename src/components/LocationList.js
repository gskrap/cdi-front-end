import React from 'react'
import LoadingAnimation from './LoadingAnimation'

import '../styles/Form.css'
import '../styles/LocationList.css'

export default class LocationList extends React.Component {
  componentWillMount() {
    this.props.getLocations()
    this.state = {
      name: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    let location = {}
    location['name'] = this.state.name
    this.props.locationCreate(location)
    this.setState({name: ''})
  }

  handleInputChange(e) {
    const target = e.target
    const value = target.type == 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({[name]: value})
  }

  render() {
    return (
      this.props.locationsLoading ?
        // <LoadingAnimation/> :
        null :
        <div>
          <div className='form-container'>
            <form className='form' onSubmit={this.handleSubmit.bind(this)}>
              <input type='text' name='name' value={this.state.name} onChange={this.handleInputChange} placeholder='Location Name'/><br/>
              <input className='btn btn-primary btn-log' type='submit' value='Add Location'/><br/>
            </form>
          </div>
          <div className='location-list'>
            {this.props.locations.map((l) => {
              return (
                <div className='location-list-location' key={l.id}>
                  <span>{l.name}</span>
                  <div className='location-class-count'>{l.dance_classes_count}</div>
                </div>
              )
            })}
          </div>
        </div>
    )
  }
}
