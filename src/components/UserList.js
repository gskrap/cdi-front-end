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

  render() {
    if (this.props.usersLoading)
      return <LoadingAnimation/>
    else if (this.state.showUser)
      return (
        <div>
          <UserCard user={this.state.selectedUser}/>
          <div onClick={() => this.setState({showUser: false})}>back to list</div>
        </div>
      )
    else
      return (
        <div className='user-list'>
          {this.props.users.map((u) => {
            return <div onClick={() => this.setState({showUser: true, selectedUser: u})}>{u.first_name}</div>
          })}
        </div>
      )
  }
}