import React from 'react'
import AppBannerContainer from '../containers/AppBannerContainer'
import LoadingAnimation from './LoadingAnimation'
import LogInFormContainer from '../containers/LogInFormContainer'
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

  render() {
    return (
      <div className='app-container'>
        <AppBannerContainer />
        <main>
          {(() => {
            if (this.props.appLoading) {
              return <LoadingAnimation/>
            } else if (this.props.loggedIn) {
              return <UserHomeContainer/>
            } else {
              return <LogInFormContainer/>
            }
          })()}
        </main>
      </div>
    )
  }
}