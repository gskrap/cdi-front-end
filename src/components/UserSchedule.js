import React from 'react'
import LoadingAnimation from './LoadingAnimation'
import ClassCard from './ClassCard'

export default class UserSchedule extends React.Component {
  componentDidMount() {
    let prefix = this.props.user.role == 'admin' ? '' : `/users/${this.props.user.id}`
    this.props.getClasses(prefix)
  }

  renderClassList() {
    return (
      <div className='class-list'>
        {this.props.classes.map((c) => {
          return <ClassCard key={c.id} class={c}/>
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
