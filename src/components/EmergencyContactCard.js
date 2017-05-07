import React from 'react'

import '../styles/EmergencyContactCard.css'

export default class EmergencyContactCard extends React.Component {
  render() {
    return (
      <div className='emergency-contact-card'>
        <div>{this.props.contact.first_name + ' ' + this.props.contact.last_name}</div>
        <div className='row'>
          <span className='left'>relationship:&nbsp;</span>
          <span className='right'>{this.props.contact.relationship}</span>
        </div>
        <div className='row'>
          <span className='left'>email:&nbsp;</span>
          <span className='right'>{this.props.contact.email}</span>
        </div>
        <div className='row'>
          <span className='left'>phone:&nbsp;</span>
          <span className='right'>{this.props.contact.phone}</span>
        </div>
      </div>
    )
  }
}
