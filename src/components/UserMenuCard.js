import React from 'react'
import ClassCreateFormContainer from '../containers/ClassCreateFormContainer'

import '../styles/UserMenuCard.css'

export default class UserMenuCard extends React.Component {
  render() {
    return (
      <div>
        <h1>User Menu Card</h1>
        <ClassCreateFormContainer />
      </div>
    )
  }
}