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
      // this.props.loggedIn ?
      //   <UserHomeContainer/> :
      //   <FormToggle/>
        <UserHomeContainer/> 
    )
  }

  tempLoadingState() {
    return (
      this.props.appLoading ||
      (this.props.loggedIn && this.props.adminView == 'allClasses' && this.props.classesLoading) ||
      (!this.props.loggedIn && this.props.userView == 'allClasses' && this.props.classesLoading) ||
      (this.props.loggedIn && this.props.adminView == 'teachers' && this.props.teachersLoading && (this.props.teachers || []).length == 0) ||
      (!this.props.loggedIn && this.props.userView == 'teachers' && this.props.teachersLoading && (this.props.teachers || []).length == 0)
    )
  }

  render() {
    return (
      <div className='app-container'>
        {/* <div className={'main-logo-container' + ((this.props.anythingLoading || !this.props.loggedIn) ? ' bold' : '')}> */}
        <div className={'main-logo-container' + (this.tempLoadingState() ? ' bold' : '')}>
          <img className={'main-logo'} src="https://i.imgur.com/kBJhdMQ.png"/>
          {/* {this.props.anythingLoading && this.props.loggedIn ? <LoadingAnimation/> : null} */}
          {this.tempLoadingState() ? <LoadingAnimation/> : null}
        </div>
        <AppBannerContainer />
        <main>
          {this.renderView()}
        </main>
      </div>
    )
  }
}
