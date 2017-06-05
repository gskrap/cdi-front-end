import React from 'react'
import LoadingAnimation from './LoadingAnimation'
import UserCard from './UserCard'

import '../styles/UserList.css'

export default class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showUser: false,
      selectedUser: null
    }
  }

  componentWillMount() {
    this.props.getUsers()
  }

  renderUserCard() {
    return (
      <div>
        <button className='btn btn-primary btn-group' onClick={() => this.setState({showUser: false})}>Back to List</button>
        <UserCard user={this.state.selectedUser} currentUser={this.props.currentUser}/>
      </div>
    )
  }

  renderUserList() {
    return (
      <div className='user-list'>
        {this.props.users.map((u) => {
          return (
            <div className='user-list-user' onClick={() => this.setState({showUser: true, selectedUser: u})} key={u.id}>
              {u.first_name + ' ' + u.last_name}
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      this.props.usersLoading ?
        <LoadingAnimation/> :
      this.state.showUser ?
        this.renderUserCard() :
        this.renderUserList()
    )
  }
}
