import React from 'react'
import LoadingAnimation from '../components/LoadingAnimation'

import "../styles/UserMenuCard.css"

export default class UserMenuCard extends React.Component {
  componentDidMount() {
    this.props.getClasses(`/users/${this.props.user.id}`)
  }

  render() {
    return (
      <div className="user-menu-card">
        <h1>{`Welcome, ${this.props.user.first_name}!`}</h1>
        <button className="btn btn-primary btn-log" onClick={this.props.logOut}>Log Out</button>
        <p>{this.props.user.role}</p>
        {(() => {
          if (this.props.classesLoading) {
            return <LoadingAnimation/>
          } else {
            return (
              <ul>
                {this.props.classes.map((c) => {
                  return <li key={c.id}>{c.name}</li>
                })}
              </ul>
            )
          }
        })()}
      </div>
    )
  }
}