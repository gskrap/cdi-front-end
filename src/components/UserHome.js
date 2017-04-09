import React from 'react'
import UserMenuCard from './UserMenuCard'
import UserScheduleContainer from '../containers/UserScheduleContainer'

import '../styles/UserHome.css'

export default class UserHome extends React.Component {
  render() {
    return (
      <div className='user-home'>
        <h1>{`Welcome, ${this.props.user.first_name}!`}</h1>
        <button className='btn btn-primary btn-log' onClick={this.props.logOut}>Log Out</button>
        <p>{this.props.user.role}</p>
        {(() => {
          if (this.props.user.role === 'admin') {
            return <UserMenuCard/>
          } else {
            return <UserScheduleContainer/>
          }
        })()}
      </div>
    )
  }
}