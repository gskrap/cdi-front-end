import React from 'react'
import moment from 'moment'
import Datetime from 'react-datetime'

import '../styles/ClassCreateForm.css'
import '../styles/Datetime.css'

moment.fn.roundNext15Min = function () {
  let intervals = Math.floor(this.minutes() / 15)
  if (this.minutes() % 15 !== 0)
    intervals++
  if (intervals === 4) {
    this.add(1, 'hours')
    intervals = 0
  }
  this.minutes(intervals * 15)
  this.seconds(0)
  return this
}

export default class ClassCreateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startTime: moment().roundNext15Min()
    }
  }

  componentDidMount() {
    this.props.getTeachers()
  }

  handleSubmit(e) {
    e.preventDefault()
    let dance_class = {}
    for (const field in this.refs) {
      dance_class[field] = this.refs[field].value
    }
    dance_class['start_time'] = this.state.startTime.utc().format()
    this.props.classCreate(dance_class)
  }

  handleDateChange(date) {
    this.setState({startTime: date})
  }

  render() {
    return (
      <div className='class-create-form-container'>
        <form className='class-create-form' onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' ref='name' placeholder='Class Name'/><br/>
          <select ref='teacher_id'>
            {this.props.teachers.map((t) => {
              return <option key={t.id} value={t.id}>{t.first_name + ' ' + t.last_name}</option>
            })}
          </select>
          <Datetime value={this.state.startTime}
                    timeConstraints    = { { minutes: { step : 15 } } }
                    onChange={this.handleDateChange.bind(this)}
                    closeOnSelect={true}/>
          <input className='btn btn-primary' type='submit' value='Submit'/><br/>
        </form>
      </div>
    )
  }
}