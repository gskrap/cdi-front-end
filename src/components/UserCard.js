import React from 'react'
import axios from 'axios'
import moment from 'moment'
import { API, TIMEOUT } from '../actions/index.js'

import EmergencyContactCard from '../components/EmergencyContactCard'
import UserGroupsForm from '../components/UserGroupsForm'
import LittleLoader from '../components/LittleLoader'

import '../styles/UserCard.css'

export default class UserCard extends React.Component {
  constructor(props) {
    super(props)
    this.user = this.props.user
    this.state = {
      emergencyContacts: null
    }
  }

  componentDidMount() {
    setTimeout(() => {
      axios.get(API + '/users/' + this.props.user.id + '/emergency_contacts')
        .then((response) => {
          this.setState({emergencyContacts: response.data})
        })
    }, TIMEOUT)
  }

  renderUserGroupsForm() {
    return (
      this.props.currentUser.role == 'admin' ?
        <UserGroupsForm userId={this.user.id}/> : null
    )
  }

  renderEmergencyContacts() {
    return (
      !this.state.emergencyContacts ?
        <LittleLoader/> :
      this.state.emergencyContacts.length == 0 ?
        <p>none</p> :
        this.state.emergencyContacts.map((e) => {
          return <EmergencyContactCard key={e.id} contact={e}/>
        })
    )
  }

  render() {
    return (
      <div className='user-card'>
        <h2>{this.user.first_name + ' ' + this.user.last_name}</h2>
        <div className='user-row'>
          <span className='icon'><i className='icon fa fa-envelope' aria-hidden='true'/></span>
          <span className='text'>{this.user.email}</span>
        </div>
        <div className='user-row'>
          <span className='icon'><i className='icon fa fa-phone-square' aria-hidden='true'/></span>
          <span className='text'>{this.user.phone}</span>
        </div>
        <div className='user-row'>
          <span className='icon'><i className='icon fa fa-birthday-cake' aria-hidden='true'/></span>
          <span className='text'>{moment(this.user.date_of_birth).utc().format('MMMM D, YYYY')}</span>
        </div>
          {this.renderUserGroupsForm()}
        <div className='emergency-contact-list'>
          <h3>Emergency Contacts</h3>
          {this.renderEmergencyContacts()}
        </div>
      </div>
    )
  }
}
