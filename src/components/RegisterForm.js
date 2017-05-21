import React from 'react'
import moment from 'moment'
import Datetime from 'react-datetime'

import '../styles/Form.css'

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dateOfBirth: moment("2000", "YYYY"),
      alumni: false
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    let user = {}
    for (const field in this.refs) {
      user[field] = this.refs[field].value
    }
    user['date_of_birth'] = this.state.dateOfBirth.format("YYYY-MM-DD")
    user['alumni'] = this.state.alumni
    this.props.register(user)
  }

  handleDateChange(date) {
    this.setState({dateOfBirth: date})
  }

  toggleAlumni() {
    this.setState({alumni: !this.state.alumni})
  }

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit.bind(this)}>
        <input type='text' autoCorrect='off' autoCapitalize='none' ref='username' placeholder='Username'/>
        <input type='text' ref='first_name' placeholder='First Name'/>
        <input type='text' ref='last_name' placeholder='Last Name'/>
        <div className='row'>
          <div className="sub">
            <span>Date of Birth</span>
            <Datetime
              value={this.state.dateOfBirth}
              onChange={this.handleDateChange.bind(this)}
              inputProps={{readOnly:true}}
              timeFormat={false} closeOnSelect={true}
              viewMode="years"/>
          </div>
          <div className="sub small">
            <span>Alumni?</span>
            <div className="check-container"><input type="checkbox" ref="alumni" checked={this.state.alumni} onClick={this.toggleAlumni.bind(this)}/></div>
          </div>
          <div className="sub">
            <span>Gender</span>
            <select ref='gender' defaultValue="female" className="gender-list">
              <option value="not_specified">Other</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
        </div>
        <input type='email' ref='email' placeholder='Email'/>
        <input type='text' ref='phone' placeholder='Phone Number'/>
        <input type='password' ref='password' placeholder='Password'/>
        <input className='btn btn-primary btn-log' type='submit' value='Submit'/>
      </form>
    )
  }
}
