import React from 'react'
import moment from 'moment'
import Datetime from 'react-datetime'

import '../styles/Form.css'

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dateOfBirth: moment("2000", "YYYY")
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    let user = {}
    for (const field in this.refs) {
      user[field] = this.refs[field].value
    }
    user['date_of_birth'] = this.state.dateOfBirth.utc().format()
    this.props.register(user)
  }

  handleDateChange(date) {
    this.setState({dateOfBirth: date})
  }

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit.bind(this)}>
        <input type='text' ref='username' placeholder='username'/><br/>
        <input type='text' ref='first_name' placeholder='first name'/><br/>
        <input type='text' ref='last_name' placeholder='last name'/><br/>
        <div className='row'>
          <div className="sub">
            <span>date of birth</span>
            <Datetime value={this.state.dateOfBirth}
                      onChange={this.handleDateChange.bind(this)}
                      inputProps={{readOnly:true}}
                      timeFormat={false} closeOnSelect={true}
                      viewMode="years"/>
          </div>
          <div className="sub small">
            <span>alumni?</span>
            <div className="check-container"><input type="checkbox" ref="alumni" /></div>
          </div>
          <div className="sub">
            <span>gender</span>
            <select ref='gender' className="gender-list">
              <option value="not_specified">other</option>
              <option selected value="female">female</option>
              <option value="male">male</option>
            </select>
          </div>
        </div>
        <input type='text' ref='email' placeholder='email'/><br/>
        <input type='text' ref='phone' placeholder='phone number'/><br/>
        <input type='password' ref='password' placeholder='password'/><br/>
        <input className='btn btn-primary btn-log' type='submit' value='Submit'/><br/>
      </form>
    )
  }
}