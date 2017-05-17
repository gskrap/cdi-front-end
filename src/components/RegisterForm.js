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
    user['date_of_birth'] = this.state.dateOfBirth.utc().format()
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
        <input type='text' ref='username' placeholder='username'/>
        <input type='text' ref='first_name' placeholder='first name'/>
        <input type='text' ref='last_name' placeholder='last name'/>
        <div className='row'>
          <div className="sub">
            <span>date of birth</span>
            <Datetime
              value={this.state.dateOfBirth}
              onChange={this.handleDateChange.bind(this)}
              inputProps={{readOnly:true}}
              timeFormat={false} closeOnSelect={true}
              viewMode="years"/>
          </div>
          <div className="sub small">
            <span>alumni?</span>
            <div className="check-container"><input type="checkbox" ref="alumni" checked={this.state.alumni} onClick={this.toggleAlumni.bind(this)}/></div>
          </div>
          <div className="sub">
            <span>gender</span>
            <select ref='gender' defaultValue="female" className="gender-list">
              <option value="not_specified">other</option>
              <option value="female">female</option>
              <option value="male">male</option>
            </select>
          </div>
        </div>
        <input type='text' ref='email' placeholder='email'/>
        <input type='text' ref='phone' placeholder='phone number'/>
        <input type='password' ref='password' placeholder='password'/>
        <input className='btn btn-primary btn-log' type='submit' value='Submit'/>
      </form>
    )
  }
}
