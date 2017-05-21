import React from 'react'
import AppBannerContainer from '../containers/AppBannerContainer'
import LoadingAnimation from './LoadingAnimation'
import FormToggle from '../components/FormToggle'
import UserHomeContainer from '../containers/UserHomeContainer'

import '../styles/App.css'

export default class App extends React.Component {
  componentDidMount() {
    this.checkUserStatus()
  }

  checkUserStatus() {
    if (window.localStorage.getItem('auth_token')) {
      this.props.getPermissions()
    }
  }

  renderView() {
    return (
      this.props.appLoading ?
        <LoadingAnimation/> :
      this.props.loggedIn ?
        <UserHomeContainer/> :
        <FormToggle/>
    )
  }

  render() {
    return (
      <div className='app-container'>
        <AppBannerContainer />
        <main>
          {this.renderView()}
        </main>
      </div>
    )
  }
}
