import React from 'react'
import AdminMenuCardContainer from '../containers/AdminMenuCardContainer'
import UserMenuCardContainer from '../containers/UserMenuCardContainer'

import '../styles/UserHome.css'

export default class UserHome extends React.Component {
  renderView() {
    return (
      (this.props.user || {}).role == 'admin' ?
        <AdminMenuCardContainer/> :
        <UserMenuCardContainer/>
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
