import React from 'react'

import '../styles/Form.css'

export default class RegisterForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    let user = {}
    for (const field in this.refs) {
      user[field] = this.refs[field].value
    }
    this.props.register(user)
  }

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit.bind(this)}>
        <input type='text' ref='username' placeholder='username'/><br/>
        <input type='text' ref='firstName' placeholder='first name'/><br/>
        <input type='text' ref='lastName' placeholder='last name'/><br/>
        <input type='password' ref='password' placeholder='password'/><br/>
        <input className='btn btn-primary btn-log' type='submit' value='Submit'/><br/>
      </form>
    )
  }
}