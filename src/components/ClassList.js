import moment from 'moment'
import React from 'react'
import LoadingAnimation from './LoadingAnimation'
import ClassEditFormContainer from '../containers/ClassEditFormContainer'
import ClassCardContainer from '../containers/ClassCardContainer'
import RollCallFormContainer from '../containers/RollCallFormContainer'

export default class ClassList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showClassEditForm: false,
      selectedClass: null
    }
  }

  // componentWillMount() {
  //   this.fetchClasses()
  // }

  backToList() {
    this.fetchClasses()
    this.setState({showClassEditForm: false, showRollCallForm: false})
  }

  fetchClasses() {
    let prefix = this.props.all ? '' : `/users/${this.props.user.id}`
    this.props.getClasses(prefix)
  }

  showEditCard(danceClass) {
    this.setState({showClassEditForm: true, selectedClass: danceClass})
  }

  showRollCallForm(danceClass) {
    this.setState({showRollCallForm: true, selectedClass: danceClass})
  }

  renderClassEditForm() {
    return (
      <div>
        <button className='btn btn-primary btn-group' onClick={this.backToList.bind(this)}>Back to Classes</button>
        <ClassEditFormContainer danceClass={this.state.selectedClass}/>
      </div>
    )
  }

  renderRollCallForm() {
    return (
      <div>
        <button className='btn btn-primary btn-group' onClick={this.backToList.bind(this)}>Back to Classes</button>
        <h3 className='roll-head'>Class Attendance</h3>
        <h3 className='roll-head'>{this.state.selectedClass.name + ' - ' + this.state.selectedClass.teacher.first_name + ' ' + this.state.selectedClass.teacher.last_name}</h3>
        <h3 className='roll-head'>{moment(this.state.selectedClass.start_time).format('M/DD @ h:mm a')}</h3>
        <RollCallFormContainer danceClass={this.state.selectedClass}/>
      </div>
    )
  }

  renderClassList() {
    return (
      <div className='class-list'>
        {this.props.classes.map((c) => {
          return <ClassCardContainer key={c.id} danceClass={c} showRollCallForm={this.showRollCallForm.bind(this)} showEditCard={this.showEditCard.bind(this)}/>
        })}
      </div>
    )
  }

  render() {
    return (
      this.props.classesLoading ?
        <LoadingAnimation/> :
      this.state.showRollCallForm ?
        this.renderRollCallForm() :
      this.state.showClassEditForm ?
        this.renderClassEditForm() :
        this.renderClassList()
    )
  }
}
