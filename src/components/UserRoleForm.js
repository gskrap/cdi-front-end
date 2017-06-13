import React from 'react'
import axios from 'axios'
import { API, TIMEOUT } from '../actions/index.js'

import '../styles/Form.css'

export default class UserRoleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showUserRoleForm: false,
      role: this.props.user.role,
      saving: false
    }
  }

  updateUserRole() {
    let updatedUser = this.props.user
    updatedUser.role = this.state.role
    setTimeout(() => {
      return axios({
        method: 'put',
        url: API + '/users/' + updatedUser.id,
        data: updatedUser
      })
        .then(() => {
          this.setState({saving: false})
        })
    }, TIMEOUT)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({saving: true})
    this.updateUserRole()
  }

  renderForm() {
    return (
      <form className='form role-form' onSubmit={this.handleSubmit.bind(this)}>
        <div className='row'>
          <select className='role-select' value={this.state.role} onChange={(e) => {this.setState({role: e.target.value})}}>
            <option value='student'>Student</option>
            <option value='teacher'>Faculty</option>
            <option value='work_study'>Work Study</option>
            <option value='admin'>Admin</option>
          </select>
        </div>
        <input className='btn btn-primary btn-group' type='submit' value={this.state.saving ? 'Saving' : 'Save Role'}/>
      </form>
    )
  }

  renderShowFormButton() {
    return (
      <div className={'btn-container'}>
        <button className='btn-primary btn-group' onClick={() => {this.setState({showUserRoleForm: true})}}>Show / Edit Role</button>
      </div>
    )
  }

  render() {
    return (
      this.state.showUserRoleForm ?
        this.renderForm() :
        this.renderShowFormButton()
    )
  }
}
