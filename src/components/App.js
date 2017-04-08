import React from 'react'
import LogInFormContainer from '../containers/LogInFormContainer'

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
      <div>
        <h1>{"Logged In: " + this.props.loggedIn}</h1>
        <h1>{"Role: " + this.props.role}</h1>
        <LogInFormContainer/>
      </div>
    )
  }
}