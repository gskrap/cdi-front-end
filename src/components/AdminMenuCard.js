import React from 'react'
import ClassListContainer from '../containers/ClassListContainer'
import LocationListContainer from '../containers/LocationListContainer'
import UserListContainer from '../containers/UserListContainer'
import ClassCreateFormContainer from '../containers/ClassCreateFormContainer'

import '../styles/AdminMenuCard.css'

export default class AdminMenuCard extends React.Component {
  componentWillMount() {
    this.props.getClasses('')
  }

  selected(view) {
    return this.props.adminView === view
  }

  renderView() {
    switch(this.props.adminView) {
      case 'allClasses':
        return <ClassListContainer all={true}/>
      case 'upcomingClasses':
        return <ClassListContainer all={true} upcoming={true}/>
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
            <button className={this.selected('allClasses')} onClick={() => this.props.updateAdminView('allClasses')}>All Classes</button>
            <button className={this.selected('upcomingClasses')} onClick={() => this.props.updateAdminView('upcomingClasses')}>Upcoming</button>
            <button className={this.selected('createClass')} onClick={() => this.props.updateAdminView('createClass')}>Create Class</button>
            <button className={this.selected('locations')} onClick={() => this.props.updateAdminView('locations')}>Locations</button>
            <button className={this.selected('editUsers')} onClick={() => this.props.updateAdminView('editUsers')}>Edit Users</button>
          </div>
          <div className='bottom'>
            {this.renderView()}
          </div>
        </div>
      </div>
    )
  }
}
