import React from 'react'
import moment from 'moment'

import '../styles/ClassCard.css'

export default class ClassCard extends React.Component {
  renderEditButtons() {
    if (this.props.user.role == 'admin') {
      return (
        <div className='small'>
          <i className="fa fa-trash" onClick={() => this.props.deleteClass(this.props.class.id)} aria-hidden="true"></i>
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </div>
      )
    }
  }
  
  render() {
    return (
      <div className='class-card'>
        <div className='half'>
          <div className='title parallelogram'><div>{this.props.class.name}</div></div>
          <p className='teacher'>{this.props.class.teacher.first_name + ' ' + this.props.class.teacher.last_name}</p>
          <p className='location'>{this.props.class.location ? this.props.class.location.name : 'No Location'}</p>
        </div>
        <div className='half'>
          <div className='date'>
            <div className='title date-top'>{this.props.class.start_time ? moment(this.props.class.start_time).format('dddd M/D') : 'No Date'}</div>
            <p className='inline'>{this.props.class.start_time ? moment(this.props.class.start_time).format('h:mm A') : ''}</p>
            <p className='inline'>{this.props.class.end_time ? moment(this.props.class.end_time).format(' - h:mm A') : ''}</p>
          </div>
          {this.props.class.groups.map((g, i) => {
            return <p className='group' key={g.id}>{g.name + (i < this.props.class.groups.length - 1 ? ',\u00A0' : '')}</p>
          })}
        </div>
        {this.renderEditButtons()}
      </div>
    )
  }
}
