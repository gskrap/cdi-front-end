import React from 'react'
import axios from 'axios'
import { API, TIMEOUT } from '../actions/index.js'

import '../styles/Form.css'

export default class UserDeleteButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showConfirmDelete: false,
      buttonText: 'Delete User',
      userDeleted: false
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    setTimeout(() => {
      return axios.delete(API + '/users/' + this.props.user.id)
        .then(() => {
          this.setState({buttonText: 'USER DELETED', showConfirmDelete: false, userDeleted: true})
        })
    }, TIMEOUT)
  }

  showForm() {
    if (!this.state.userDeleted) {
      this.setState({showConfirmDelete: true})
    }
  }

  renderForm() {
    return (
      <div>
        <div className='btn-container'>
          <button className='btn-primary btn-group danger' onClick={this.handleSubmit.bind(this)}>Delete {this.props.user.first_name}</button>
        </div>
        <div className='btn-container'>
          <button className='btn-primary btn-group danger' onClick={() => {this.setState({showConfirmDelete: false})}}>Cancel</button>
        </div>
      </div>
    )
  }

  renderShowFormButton() {
    return (
      <div className='btn-container'>
        <button className={'btn-primary btn-group' + (this.state.userDeleted ? ' danger' : '')} onClick={this.showForm.bind(this)}>{this.state.buttonText}</button>
      </div>
    )
  }

  render() {
    return (
      this.state.showConfirmDelete ?
        this.renderForm() :
        this.renderShowFormButton()
    )
  }
}
