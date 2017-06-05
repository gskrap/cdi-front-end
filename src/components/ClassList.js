import React from 'react'
import LoadingAnimation from './LoadingAnimation'
import ClassEditFormContainer from '../containers/ClassEditFormContainer'
import ClassCardContainer from '../containers/ClassCardContainer'

export default class ClassList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showClassEditForm: false,
      selectedClass: null
    }
  }

  componentWillMount() {
    this.fetchClasses()
  }

  backToList() {
    this.fetchClasses()
    this.setState({showClassEditForm: false})
  }

  fetchClasses() {
    let prefix = ['admin', 'work_study'].includes(this.props.user.role) ? '' : `/users/${this.props.user.id}`
    this.props.getClasses(prefix)
  }

  showEditCard(danceClass) {
    this.setState({showClassEditForm: true, selectedClass: danceClass})
  }

  renderClassEditForm() {
    return (
      <div>
        <button className='btn btn-primary btn-group' onClick={this.backToList.bind(this)}>Back to List</button>
        <ClassEditFormContainer danceClass={this.state.selectedClass}/>
      </div>
    )
  }

  renderClassList() {
    return (
      <div className='class-list'>
        {this.props.classes.map((c) => {
          return <ClassCardContainer key={c.id} danceClass={c} showEditCard={this.showEditCard.bind(this)}/>
        })}
      </div>
    )
  }

  render() {
    return (
      this.props.classesLoading ?
        <LoadingAnimation/> :
      this.state.showClassEditForm ?
        this.renderClassEditForm() :
        this.renderClassList()
    )
  }
}
