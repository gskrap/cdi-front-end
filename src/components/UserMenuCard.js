import React from 'react'
import EmergencyContactForm from './EmergencyContactForm'
import UserScheduleContainer from '../containers/UserScheduleContainer'

import '../styles/UserMenuCard.css'

export default class AdminMenuCard extends React.Component {
  render() {
    return (
      <div>
        <div className='user-menu'>
          <div className='top'>
            <EmergencyContactForm user={this.props.user}/>
          </div>
          <div className='bottom'>
            <UserScheduleContainer/>
          </div>
        </div>
      </div>
    )
  }
}