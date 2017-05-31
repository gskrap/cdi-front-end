import React from 'react'
import LoadingAnimation from './LoadingAnimation'
import ClassCardContainer from '../containers/ClassCardContainer'

export default class UserSchedule extends React.Component {
  componentDidMount() {
    let prefix = ['admin', 'work_study'].includes(this.props.user.role) ? '' : `/users/${this.props.user.id}`
    this.props.getClasses(prefix)
  }

  renderClassList() {
    return (
      <div className='class-list'>
        {this.props.classes.map((c) => {
          return <ClassCardContainer key={c.id} class={c}/>
        })}
      </div>
    )
  }

  render() {
    return (
      this.props.classesLoading ?
        <LoadingAnimation/> :
        this.renderClassList()
    )
  }
}
