import React from 'react'
import AdminMenuCardContainer from '../containers/AdminMenuCardContainer'
import UserMenuCard from './UserMenuCard'

import '../styles/UserHome.css'

export default class UserHome extends React.Component {
  renderView() {
    return (
      this.props.user.role == 'admin' ?
        <AdminMenuCardContainer/> :
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
