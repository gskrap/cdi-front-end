import React from 'react'

import '../styles/UserList.css'

export default class UserList extends React.Component {
  componentWillMount() {
    this.props.getUsers()
  }

  render() {
    return (
      <div className='user-list'>
        <h1>Users</h1>
        {this.props.users.map((u) => {
          return <div>{u.first_name}</div>
        })}
      </div>
    )
  }
}