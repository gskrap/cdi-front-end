import React from 'react'

export default class LogInForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    let session = {}
    for (const field in this.refs) {
      session[field] = this.refs[field].value
    }
    this.props.logIn(session)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="username"/><br/>
          <input type="text" ref="password"/><br/>
          <input type="submit" value="Log In"/><br/>
        </form>
        <button onClick={this.props.logOut}>Log Out</button>
      </div>
    )
  }
}