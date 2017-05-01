import React from 'react'
import AdminMenuCard from './AdminMenuCard'
import UserMenuCard from './UserMenuCard'

import '../styles/UserHome.css'

export default class UserHome extends React.Component {
  render() {
    return (
      <div className='user-home'>
        {(() => {
          if (this.props.user.role === 'admin') {
            return <AdminMenuCard/>
          } else {
            return <UserMenuCard user={this.props.user}/>
          }
        })()}
      </div>
    )
  }
}