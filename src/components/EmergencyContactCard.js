import React from 'react'

export default class EmergencyContactCard extends React.Component {
  render() {
    return (
      <div className='emergency-contact-card'>
        <div className='emergency-row'>
          <span className='icon'><i className='icon fa fa-user-circle' aria-hidden='true'/></span>
          <span className='right'>{this.props.contact.relationship + ' - ' + this.props.contact.first_name + ' ' + this.props.contact.last_name}</span>
        </div>
        <div className='emergency-row'>
          <span className='icon'><i className='icon fa fa-envelope' aria-hidden='true'/></span>
          <span className='right'>{this.props.contact.email}</span>
        </div>
        <div className='emergency-row'>
          <span className='icon'><i className='icon fa fa-phone-square' aria-hidden='true'/></span>
          <span className='right'>{this.props.contact.phone}</span>
        </div>
      </div>
    )
  }
}
