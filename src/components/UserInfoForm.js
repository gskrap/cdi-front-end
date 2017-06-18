import moment from 'moment'
import React from 'react'
import axios from 'axios'
import Datetime from 'react-datetime'

import { API, TIMEOUT } from '../actions/index.js'

import '../styles/Form.css'

export default class UserInfoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showUserInfoForm: false,
      bio: this.props.user.bio || '',
      phone: this.props.user.phone || '',
      email: this.props.user.email || '',
      date_of_birth: this.props.user.date_of_birth,
      saving: false,
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({saving: true})
    let user = {}
    user.bio = this.state.bio
    user.phone = this.state.phone
    user.date_of_birth = moment(this.state.date_of_birth).utc()
    setTimeout(() => {
      return axios({
        method: 'put',
        url: API + '/users/' + this.props.user.id,
        data: user
      })
        .then((response) => {
          this.setState({bio: response.data.bio})
          this.setState({phone: response.data.phone})
          this.setState({date_of_birth: response.data.date_of_birth})
          this.props.updateInfoFields(response.data)
          this.setState({saving: false})
        })
        .catch((e) => {
          this.setState({saving: false})
          console.log(e)
        })
    }, TIMEOUT)
  }

  handleInputChange(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({[name]: value})
  }

  handleDateChange(date) {
    this.setState({date_of_birth: date})
  }

  renderForm() {
    return (
      <form className='form info-form' onSubmit={this.handleSubmit.bind(this)}>
        <div className='text-left'><span>Bio:</span></div>
        <textarea name='bio' rows={10} value={this.state.bio} onChange={this.handleInputChange.bind(this)}/>
        <span className='icon field-icon'><i className='icon fa fa-phone-square' aria-hidden='true'/></span>
        <input name='phone' type='text' value={this.state.phone} onChange={this.handleInputChange.bind(this)}/>
        <span className='icon field-icon'><i className='icon fa fa-birthday-cake' aria-hidden='true'/></span>
        <Datetime
          value={moment(this.state.date_of_birth).utc()}
          onChange={this.handleDateChange.bind(this)}
          inputProps={{readOnly:true}}
          timeFormat={false} closeOnSelect={true}
          viewMode='years'/>
        <input className='btn btn-primary btn-group' type='submit' value={this.state.saving ? 'Saving' : 'Save Info'}/>
      </form>
    )
  }

  renderShowFormButton() {
    return (
      <div className={'btn-container'}>
        <button className='btn-primary btn-group' onClick={() => {this.setState({showUserInfoForm: true})}}>Show / Edit Info</button>
      </div>
    )
  }

  render() {
    return (
      this.state.showUserInfoForm ?
        this.renderForm() :
        this.renderShowFormButton()
    )
  }
}
