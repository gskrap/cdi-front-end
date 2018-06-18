import React from 'react'
import LoadingAnimation from './LoadingAnimation'
import UserCard from './UserCard'
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react'

import '../styles/UserList.css'

export default class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showUser: false,
      selectedUser: null
    }
  }

  componentDidMount() {
    if (this.props.getUsers) {
      this.props.getUsersInitial()
    }
    if (this.props.rollCall) {
      this.props.users.forEach((u) => {
        this.setState({[u.first_name + ' ' + u.last_name + '_user']: false})
      })
    }
  }

  renderUserCard() {
    return (
      <div>
        <button className='btn btn-primary btn-group'
          onClick={() => {
            if (!this.props.rollCall) {
              this.props.getUsers()
            }
            this.setState({showUser: false})}}>
          Back to Users
        </button>
        <UserCard user={this.state.selectedUser} currentUser={this.props.currentUser}/>
      </div>
    )
  }

  activeButtonClass(name) {
    return this.state[name + '_user'] ? 'roll-active' : 'roll-inactive'
  }

  toggleButton(name) {
    this.setState({[name + '_user']: !this.state[name + '_user']})
  }

  renderAttendanceButton(u) {
    if (this.props.rollCall) {
      return (
        <i className={'fa fa-check ' + this.activeButtonClass(u.first_name + ' ' + u.last_name)} onClick={() => this.toggleButton(u.first_name + ' ' + u.last_name)} aria-hidden="true"></i>
      )
    }
  }

  renderAttendanceSubmit() {
    if (this.props.rollCall) {
      let body = 'The following students were not present when attendance was taken: %0D%0A%0D%0A'
      Object.keys(this.state).forEach((key) => {
        if (key.slice(key.length - 5, key.length) == '_user' && !this.state[key]) {
          body = body + key.slice(0, key.length - 5) + '%0D%0A'
        }
      })
      return (
        <button className='btn btn-primary btn-roll-submit' onClick={() => {window.location.href ="mailto:commercialdanceintensive@gmail.com?subject=Attendance - " + this.props.rollCallClass.name + "&body=" + body}}>Submit Attendance</button>
      )
    }
  }

  renderUserList() {
    return (
      <div className='user-list'>
        {this.props.users.map((u) => {
          return (
            <div key={u.id} className='roll-call-row'>
              {this.renderAttendanceButton(u)}
              <div className='user-list-user' onClick={() => this.setState({showUser: true, selectedUser: u})}>
                <i className={'fa fa-user avatar' + (u.archived? ' archived-user-icon' : '')} aria-hidden="true"></i>
                <div className='name'>
                  {u.first_name + ' ' + u.last_name}
                </div>
              </div>
            </div>
          )
        })}
        {this.renderAttendanceSubmit()}
      </div>
    )
  }

  render() {
    return (
      this.props.usersLoading ?
        // <LoadingAnimation/> :
        null :
      this.state.showUser ?
        this.renderUserCard() :
        this.renderUserList()
    )
  }
}
