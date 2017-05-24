import React from 'react'
import moment from 'moment'

import '../styles/ClassCard.css'

export default class ClassCard extends React.Component {
  render() {
    return (
      <div className='class-card'>
        <div className='half'>
          <div className='title'><div>{this.props.class.name}</div></div>
          <p className='teacher'>{this.props.class.teacher.first_name + ' ' + this.props.class.teacher.last_name}</p>
          <p className='location'>{this.props.class.location ? this.props.class.location.name : 'No Location'}</p>
        </div>
        <div className='half'>
          <p className='date'>
            <span>{this.props.class.start_time ? moment(this.props.class.start_time).format('ddd M/D, h:mm A') : 'No Date'}</span>
            <span>{this.props.class.end_time ? moment(this.props.class.end_time).format(' - h:mm A') : ''}</span>
          </p>
          {this.props.class.groups.map((g) => {
            return <p className='group' key={g.id}>{g.name}</p>
          })}
        </div>
      </div>
    )
  }
}
