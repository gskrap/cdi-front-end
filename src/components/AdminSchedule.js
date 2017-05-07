import React from 'react'
import LoadingAnimation from './LoadingAnimation'
import ClassList from './ClassList'

import '../styles/Schedule.css'

export default class AdminSchedule extends React.Component {
  componentDidMount() {
    this.props.getClasses()
  }

  render() {
    if (this.props.classesLoading) {
      return <LoadingAnimation/>
    } else {
      return <ClassList classes={this.props.classes}/>
    }
  }
}
