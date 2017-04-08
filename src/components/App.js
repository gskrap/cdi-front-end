import React from 'react'
import LoadingAnimation from '../components/LoadingAnimation'
import LogInFormContainer from '../containers/LogInFormContainer'
import UserMenuCardContainer from '../containers/UserMenuCardContainer'

import "../styles/App.css"

export default class App extends React.Component {
  componentDidMount() {
    this.checkUserStatus()
  }

  checkUserStatus() {
    if (window.localStorage.getItem("auth_token")) {
      this.props.getPermissions()
    }
  }

  render() {
    return (
      <div className="app-container">
        <h1>CDI 2017</h1>
        <main>
          {(() => {
            if (this.props.appLoading) {
              return <LoadingAnimation/>
            } else if (this.props.loggedIn) {
              return <UserMenuCardContainer/>
            } else {
              return <LogInFormContainer/>
            }
          })()}
        </main>
      </div>
    )
  }
}