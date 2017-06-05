import React from 'react'
import moment from 'moment'
import Datetime from 'react-datetime'

import '../styles/Form.css'

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      student: true,
      dateOfBirth: moment('2000', 'YYYY'),
      alumni: false
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.password == this.state.confirmPassword) {
      let user = {}
      for (const field in this.refs) {
        user[field] = this.refs[field].value
      }
      user['date_of_birth'] = this.state.dateOfBirth.format('YYYY-MM-DD')
      user['alumni'] = this.state.alumni
      this.props.register(user)
    } else {
      this.setState({error: 'Password must match'})
    }
  }

  handleDateChange(date) {
    this.setState({dateOfBirth: date})
  }

  renderError() {
    if (this.state.error) {return <div className='error'>{this.state.error}</div>}
  }

  renderStudentFields() {
    if (this.state.student) {
      return (
        <div className='row'>
          <div className="sub">
            <span>Date of Birth</span>
            <Datetime
              value={this.state.dateOfBirth}
              onChange={this.handleDateChange.bind(this)}
              inputProps={{readOnly:true}}
              timeFormat={false} closeOnSelect={true}
              viewMode='years'/>
          </div>
          <div className='sub small'>
            <span>Alumni?</span>
            <div className='check-container'><input type='checkbox' checked={this.state.alumni} onChange={() => this.setState({alumni: !this.state.alumni})}/></div>
          </div>
          <div className='sub'>
            <span>Gender</span>
            <select ref='gender' defaultValue='female' className='gender-list'>
              <option value='not_specified'>Other</option>
              <option value='female'>Female</option>
              <option value='male'>Male</option>
            </select>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit.bind(this)}>
        <div className={'form-select ' + this.state.student} onClick={() => this.setState({student: true})}>Student</div>
        <div className={'form-select ' + !this.state.student} onClick={() => this.setState({student: false})}>Other</div>
        <input type='email' ref='email' placeholder='Email'/>
        <input type='text' ref='first_name' placeholder='First Name'/>
        <input type='text' ref='last_name' placeholder='Last Name'/>
        {this.renderStudentFields()}
        <input type='text' ref='phone' placeholder='Phone Number'/>
        <input onChange={(e) => this.setState({password: e.target.value})} type='password' ref='password' placeholder='Password'/>
        <input onChange={(e) => this.setState({confirmPassword: e.target.value})} type='password' ref='password' placeholder='Confirm Password'/>
        <input className='btn btn-primary btn-log' type='submit' value='Submit'/>
        {this.renderError()}
      </form>
    )
  }
}
