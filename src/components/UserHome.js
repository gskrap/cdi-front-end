import React from 'react'
import AdminMenuCard from './AdminMenuCard'
import UserMenuCard from './UserMenuCard'

import '../styles/UserHome.css'

export default class UserHome extends React.Component {
  renderView() {
    return (
      this.props.user.role == 'admin' ?
        <AdminMenuCard/> :
        <UserMenuCard user={this.props.user}/>
    )
  }

  render() {
    return (
      <div className='user-home'>
        {this.renderView()}
      </div>
    )
  }
}
