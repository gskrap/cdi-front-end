import React from 'react'
import EmergencyContactForm from './EmergencyContactForm'
import ClassListContainer from '../containers/ClassListContainer'

import '../styles/UserMenuCard.css'

export default class UserMenuCard extends React.Component {
  render() {
    return (
      <div>
        <div className='user-menu'>
          <div className='top'>
            <EmergencyContactForm userId={this.props.user.id}/>
          </div>
          <div className='bottom'>
            <ClassListContainer/>
          </div>
        </div>
      </div>
    )
  }
}
