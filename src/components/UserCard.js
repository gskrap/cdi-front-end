import React from 'react'
import axios from 'axios'
import moment from 'moment'
import { API, TIMEOUT } from '../actions/index.js'
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react'

import EmergencyContactCard from '../components/EmergencyContactCard'
import UserGroupsForm from '../components/UserGroupsForm'
import UserInfoForm from '../components/UserInfoForm'
import UserRoleForm from '../components/UserRoleForm'
import UserDeleteButton from '../components/UserDeleteButton'
import LittleLoader from '../components/LittleLoader'

import '../styles/UserCard.css'

export default class UserCard extends React.Component {
  constructor(props) {
    super(props)
    this.user = this.props.user
    this.state = {
      emergencyContacts: null,
      bio: this.user.bio || '',
      phone: this.user.phone || '',
      email: this.user.email || '',
      date_of_birth: this.user.date_of_birth || moment('2000', 'YYYY')
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

  renderUserBio() {
    return (
      this.state.bio != '' ?
        <div className='user-bio'>{this.state.bio}</div> :
        null
    )
  }

  renderUserContactInfo() {
    return (
      this.props.currentUser.role == 'admin' ?
        (
          <div>
            <div className='user-row'>
              <span className='icon'><i className='icon fa fa-envelope' aria-hidden='true'/></span>
              <span className='text'>{this.state.email}</span>
            </div>
            <div className='user-row'>
              <span className='icon'><i className='icon fa fa-phone-square' aria-hidden='true'/></span>
              <span className='text'>{this.state.phone}</span>
            </div>
            <div className='user-row'>
              <span className='icon'><i className='icon fa fa-birthday-cake' aria-hidden='true'/></span>
              <span className='text'>{moment(this.state.date_of_birth).utc().format('MMMM D, YYYY')}</span>
            </div>
          </div>
        ) :
        null
    )
  }

  updateInfoFields(user) {
    this.setState({bio: user.bio, phone: user.phone, date_of_birth: user.date_of_birth})
  }

  renderUserInfoForm() {
    return (
      this.props.currentUser.role == 'admin' ?
        <UserInfoForm user={this.user} updateInfoFields={this.updateInfoFields.bind(this)}/> : null
    )
  }

  renderUserGroupsForm() {
    return (
      this.props.currentUser.role == 'admin' ?
        <UserGroupsForm userId={this.user.id}/> : null
    )
  }

  renderUserRoleForm() {
    return (
      this.props.currentUser.role == 'admin' ?
        <UserRoleForm user={this.user}/> : null
    )
  }

  renderDeleteButton() {
    return (
      this.props.currentUser.role == 'admin' ?
        <UserDeleteButton user={this.user}/> : null
    )
  }

  renderEmergencyContactContainer() {
    return (
      this.props.currentUser.role == 'admin' ?
        (
          <div className='emergency-contact-list'>
            <h3>Emergency Contacts</h3>
            {this.renderEmergencyContacts()}
          </div>
        ) :
        null
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
        <Image className='center' cloudName='dqehbd6wb' width='300' crop='scale'
          publicId={'2017_' + this.user.last_name + '_' + this.user.first_name + '_cdi_gskrap'}
          alt={this.user.last_name + '_' + this.user.first_name} >
          <Transformation default_image='avatar.png'/>
        </Image><br/>
        {this.renderUserBio()}
        {this.renderUserContactInfo()}
        {this.renderUserInfoForm()}
        {this.renderUserGroupsForm()}
        {this.renderUserRoleForm()}
        {this.renderDeleteButton()}
        {this.renderEmergencyContactContainer()}
      </div>
    )
  }
}
