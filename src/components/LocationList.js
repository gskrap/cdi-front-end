import React from 'react'
import LoadingAnimation from './LoadingAnimation'

import '../styles/Form.css'
import '../styles/LocationList.css'

export default class LocationList extends React.Component {
  componentWillMount() {
    this.props.getLocations()
  }

  handleSubmit(e) {
    e.preventDefault()
    let location = {}
    for (const field in this.refs) {
      location[field] = this.refs[field].value
    }
    this.props.locationCreate(location)
  }

  render() {
    if (this.props.locationsLoading)
      return <LoadingAnimation/>
    else
      return (
        <div>
          <div className='form-container'>
            <form className='form' onSubmit={this.handleSubmit.bind(this)}>
              <input type='text' ref='name' placeholder='Location Name'/><br/>
              <input className='btn btn-primary btn-log' type='submit' value='Add Location'/><br/>
            </form>
          </div>
          <div className='location-list'>
            {this.props.locations.map((l) => {
              return (
                <div key={l.id}>
                  <span>{l.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      )
  }
}
