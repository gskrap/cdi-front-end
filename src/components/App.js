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
        // <LoadingAnimation/> :
        null :
      this.props.loggedIn ?
        <UserHomeContainer/> :
        <FormToggle/>
    )
  }

  render() {
    return (
      <div className='app-container'>
        <div className={'main-logo-container' + ((this.props.anythingLoading || !this.props.loggedIn) ? ' bold' : '') + (this.props.loggedIn ? '' : ' spaced')}>
          <img className={'main-logo'} src="https://i.imgur.com/qKsbE3Z.png"/>
          {this.props.anythingLoading && this.props.loggedIn ? <LoadingAnimation/> : null}
        </div>
        <AppBannerContainer />
        <main>
          {this.renderView()}
        </main>
      </div>
    )
  }
}
