import React from 'react'
import AdminMenuCard from './AdminMenuCard'
import UserScheduleContainer from '../containers/UserScheduleContainer'

import '../styles/UserHome.css'

export default class UserHome extends React.Component {
  render() {
    return (
      <div className='user-home'>
        {(() => {
          if (this.props.user.role === 'admin') {
            return <AdminMenuCard/>
          } else {
            return <UserScheduleContainer/>
          }
        })()}
      </div>
    )
  }
}