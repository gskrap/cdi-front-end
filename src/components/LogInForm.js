import React from 'react'

import '../styles/LogInForm.css'

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
      <div className='log-in-form-container'>
        <form className='log-in-form' onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' ref='username' placeholder='username'/><br/>
          <input type='password' ref='password' placeholder='password'/><br/>
          <input className='btn btn-primary btn-log' type='submit' value='Log In'/><br/>
        </form>
      </div>
    )
  }
}