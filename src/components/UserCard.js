import React from 'react'
import moment from 'moment'

import '../styles/UserCard.css'

export default class UserCard extends React.Component {
  constructor(props) {
    super(props)
    this.user = this.props.user
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
      </div>
    )
  }
}