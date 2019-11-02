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
        <input style={{border: '1px solid lightgray'}} type='email' ref='email' placeholder='Email'/><br/>
        <input style={{border: '1px solid lightgray'}} type='password' ref='password' placeholder='Password'/><br/>
        <input className='btn btn-primary btn-log' type='submit' value='Submit'/><br/>
      </form>
    )
  }
}
