import React from 'react'

import '../styles/Form.css'

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
      <form className='form' onSubmit={this.handleSubmit.bind(this)}>
        <input type='text' autoCorrect='off' autoCapitalize='none' ref='username' placeholder='Username'/><br/>
        <input type='password' ref='password' placeholder='Password'/><br/>
        <input className='btn btn-primary btn-log' type='submit' value='Submit'/><br/>
      </form>
    )
  }
}
