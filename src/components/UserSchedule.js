import React from 'react'
import LoadingAnimation from './LoadingAnimation'
import ClassList from './ClassList'

import '../styles/UserSchedule.css'

export default class UserSchedule extends React.Component {
  componentDidMount() {
    this.props.getClasses(`/users/${this.props.user.id}`)
  }

  render() {
    if (this.props.classesLoading) {
      return <LoadingAnimation/>
    } else {
      return <ClassList classes={this.props.classes}/>
    }
  }
}