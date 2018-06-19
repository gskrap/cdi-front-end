import React from 'react'
import moment from 'moment'

import '../styles/ClassCard.css'

export default class ClassCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showConfirmDelete: false
    }
  }

  renderSecondTeacher() {
    if (this.props.danceClass.secondary_teacher) {
      return <div className='teacher'>{this.props.danceClass.secondary_teacher.first_name + ' ' + this.props.danceClass.secondary_teacher.last_name}</div>
    }
  }

  renderDeleteButton() {
    if (this.props.user.role == 'admin') {
      return (
        <i className='fa fa-trash' onClick={() => this.setState({showConfirmDelete: true})} aria-hidden="true"></i>
      )
    }
  }

  renderEditButton() {
    if (this.props.user.role == 'admin') {
      return (
        <i className='fa fa-pencil' onClick={() => this.props.showEditCard(this.props.danceClass)} aria-hidden="true"></i>
      )
    }
  }

  renderRollCallButton() {
    if (['admin', 'work_study', 'teacher'].includes(this.props.user.role)) {
      return (
        <i className='fa fa-users' onClick={() => this.props.showRollCallForm(this.props.danceClass)} aria-hidden="true"></i>
      )
    }
  }

  renderConfirmDelete() {
    if (this.state.showConfirmDelete) {
      return(
        <div className='confirm-delete'>
          <div>Delete {this.props.danceClass.name}?</div>
          <button className='btn btn-confirm-delete' onClick={() => this.props.deleteClass(this.props.danceClass.id)}>Delete</button>
          <button className='btn btn-confirm-delete' onClick={() => this.setState({showConfirmDelete: false})}>Cancel</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div className='class-card-container'>
        {this.renderConfirmDelete()}
        <div className='class-card'>
          <div className='half'>
            <div className='title parallelogram'><div>{this.props.danceClass.name}</div></div>
            <div className='teacher'>
              {this.props.danceClass.teacher ? this.props.danceClass.teacher.first_name + ' ' + this.props.danceClass.teacher.last_name : ""}
            </div>
            {this.renderSecondTeacher()}
            <div className='location'>{this.props.danceClass.location ? this.props.danceClass.location.name : 'No Location'}</div>
            <div className='notes'>{this.props.danceClass.notes}</div>
          </div>
          <div className='half'>
            <div className='date'>
              <div className='title date-top'>{this.props.danceClass.start_time ? moment(this.props.danceClass.start_time).format('dddd M/D') : 'No Date'}</div>
              <p className='inline'>{this.props.danceClass.start_time ? moment(this.props.danceClass.start_time).format('h:mm A') : ''}</p>
              <p className='inline'>{this.props.danceClass.end_time ? moment(this.props.danceClass.end_time).format('\u00A0- h:mm A') : ''}</p>
            </div>
            <div>
              {this.props.danceClass.groups.map((g, i) => {
                return <p className='group' key={g.id}>{g.name + (i < this.props.danceClass.groups.length - 1 ? ',\u00A0' : '')}</p>
              })}
            </div>
            <div className='small button-row'>
              {this.renderDeleteButton()}
              {this.renderEditButton()}
              {this.renderRollCallButton()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
