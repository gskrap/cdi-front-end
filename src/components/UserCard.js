import React from 'react'
import axios from 'axios'
import moment from 'moment'

import EmergencyContactCard from '../components/EmergencyContactCard'
import LittleLoader from '../components/LittleLoader'

import '../styles/UserCard.css'

export default class UserCard extends React.Component {
  constructor(props) {
    super(props)
    this.user = this.props.user
    this.state = {
      emergencyContacts: null
    }
  }

  componentWillMount() {
    setTimeout(() => {
      axios.get(`https://cdi-api.herokuapp.com/users/${this.props.user.id}/emergency_contacts`)
        .then((response) => {
          this.setState({emergencyContacts: response.data})
        })
    }, 1000)
  }

  render() {
    return (
      <div className="user-card">
        <h2>{this.user.first_name + ' ' + this.user.last_name}</h2>
        <div className="user-row">
          <span className="icon"><i className="icon fa fa-envelope" aria-hidden="true"/></span>
          <span className="text">{this.user.email}</span>
        </div>
        <div className="user-row">
          <span className="icon"><i className="icon fa fa-phone-square" aria-hidden="true"/></span>
          <span className="text">{this.user.phone}</span>
        </div>
        <div className="user-row">
          <span className="icon"><i className="icon fa fa-birthday-cake" aria-hidden="true"/></span>
          <span className="text">{moment(this.user.date_of_birth).format("MMMM d, YYYY")}</span>
        </div>
        <div className='emergency-contact-list'>
          <h3>Emergency Contacts</h3>
          {(() => {
            if (!this.state.emergencyContacts)
              return <LittleLoader/>
            else if (this.state.emergencyContacts.length == 0)
              return <p>none</p>
            else
              return (
                this.state.emergencyContacts.map((e) => {
                  return <EmergencyContactCard key={e.id} contact={e}/>
                  // return <div key={e.id}>{e.first_name}</div>
                })
              )
          })()}
        </div>
      </div>
    )
  }
}
