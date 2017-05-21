import React from 'react'
import axios from 'axios'

import '../styles/Form.css'

export default class EmergencyContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }
  }

  componentWillMount() {
    axios.get(`https://cdi-api.herokuapp.com/users/${this.props.userId}/emergency_contacts`)
      .then((response) => {
        this.setState({showForm: response.data.length < 1})
      })
  }

  handleSubmit(e) {
    e.preventDefault()
    let emergency_contact = {}
    for (const field in this.refs) {
      emergency_contact[field] = this.refs[field].value
    }
    let self = this
    axios({
      method: 'post',
      url: `https://cdi-api.herokuapp.com/users/${this.props.userId}/emergency_contacts`,
      data: {emergency_contact}
    })
      .then(function () {
        self.setState({showForm: false})
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    if (this.state.showForm)
      return (
        <div>
          <h2 className="warning">please provide emergency contact information</h2>
          <div className='emergency-contact-form-container'>
            <h1>Emergency Contact</h1>
            <form className='form' onSubmit={this.handleSubmit.bind(this)}>
              <input type='text' ref='first_name' placeholder='First Name'/><br/>
              <input type='text' ref='last_name' placeholder='Last Name'/><br/>
              <input type='text' ref='relationship' placeholder='Relation'/><br/>
              <input type='text' ref='email' placeholder='Email'/><br/>
              <input type='text' ref='phone' placeholder='Phone'/><br/>
              <input className='btn btn-primary btn-log' type='submit' value='Submit'/><br/>
            </form>
          </div>
        </div>
      )
    else return null
  }
}
