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
          <button className='btn btn-primary' onClick={() => this.setState({showUser: false})}>back to list</button>
          <UserCard user={this.state.selectedUser}/>
        </div>
      )
    else
      return (
        <div className='user-list'>
          {this.props.users.map((u) => {
            return (
              <div onClick={() => this.setState({showUser: true, selectedUser: u})} key={u.id}>
                <span className='left'>{u.first_name}&nbsp;</span>
                <span className='right'>{u.last_name}</span>
              </div>
            )
          })}
        </div>
      )
  }
}
