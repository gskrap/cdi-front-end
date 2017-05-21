import React from 'react'
import UserScheduleContainer from '../containers/UserScheduleContainer'
import LocationListContainer from '../containers/LocationListContainer'
import UserListContainer from '../containers/UserListContainer'
import ClassCreateFormContainer from '../containers/ClassCreateFormContainer'

import '../styles/AdminMenuCard.css'

export default class AdminMenuCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'allClasses'
    }
  }

  setView(view) {
    this.setState({view: view})
  }

  selected(view) {
    return this.state.view === view
  }

  renderView(view) {
    switch(view) {
      case 'allClasses':
        return <UserScheduleContainer/>
      case 'createClass':
        return <ClassCreateFormContainer/>
      case 'locations':
        return <LocationListContainer/>
      case 'editUsers':
        return <UserListContainer/>
    }
  }

  render() {
    return (
      <div>
        <div className='admin-menu'>
          <div className='top'>
            <button className={this.selected('allClasses')} onClick={() => this.setView('allClasses')}>All Classes</button>
            <button className={this.selected('createClass')} onClick={() => this.setView('createClass')}>Create Class</button>
            <button className={this.selected('locations')} onClick={() => this.setView('locations')}>Locations</button>
            <button className={this.selected('editUsers')} onClick={() => this.setView('editUsers')}>Edit Users</button>
          </div>
          <div className='bottom'>
            {this.renderView(this.state.view)}
          </div>
        </div>
      </div>
    )
  }
}
