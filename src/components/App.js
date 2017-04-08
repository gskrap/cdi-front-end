import React from 'react'
import LoadingAnimation from '../components/LoadingAnimation'
import LogInFormContainer from '../containers/LogInFormContainer'

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
              return (
                <div>
                  <h1>{`Welcome, ${this.props.user.first_name}!`}</h1>
                  <h1>{`Your role is ${this.props.user.role.toUpperCase()}`}</h1>
                  <button className="btn-primary" onClick={this.props.logOut}>Log Out</button>
                </div>
              )
            } else {
              return <LogInFormContainer/>
            }
          })()}
        </main>
      </div>
    )
  }
}