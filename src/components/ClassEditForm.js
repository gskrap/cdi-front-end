import React from 'react'
import moment from 'moment'
import Datetime from 'react-datetime'
import ClassGroupsForm from './ClassGroupsForm'

import '../styles/ClassCreateForm.css'
import '../styles/Datetime.css'

moment.fn.roundNext15Min = function() {
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

export default class ClassEditForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.danceClass.id,
      name: this.props.danceClass.name || '',
      teacher_id: this.props.danceClass.teacher_id || -1,
      secondary_teacher_id: this.props.danceClass.secondary_teacher_id || -1,
      location_id: this.props.danceClass.location_id || -1,
      notes: this.props.danceClass.notes || '',
      start_time: this.props.danceClass.start_time ? moment(this.props.danceClass.start_time) : moment().roundNext15Min(),
      end_time: this.props.danceClass.end_time ? moment(this.props.danceClass.end_time) : moment().roundNext15Min(),
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this)
    this.handleEndTimeChange = this.handleEndTimeChange.bind(this)
  }

  componentDidMount() {
    this.props.getTeachers()
    this.props.getLocations()
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!(this.state.name == '' || this.state.teacher_id == -1 || this.state.location_id == -1)) {
      let dance_class = {}
      for (var key in this.state) {
        if (this.state.hasOwnProperty(key)) {
          dance_class[key] = this.state[key]
        }
      }
      dance_class['start_time'] = dance_class['start_time'].utc().format()
      dance_class['end_time'] = dance_class['end_time'].utc().format()
      this.props.classUpdate(dance_class)
    } else {
      this.setState({error: 'Name, Faculty 1, and Location Fields are Mandatory'})
    }
  }

  handleInputChange(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({[name]: value})
  }

  handleStartTimeChange(date) {
    this.setState({start_time: date, end_time: date})
  }

  handleEndTimeChange(date) {
    this.setState({end_time: date})
  }

  renderError() {
    if (this.state.error) {return <div className='error'>{this.state.error}</div>}
  }

  render() {
    return (
      <div>
        <div className='class-edit-form-container'>
          <form className='class-edit-form' onSubmit={this.handleSubmit.bind(this)}>
            <input type='text' name='name' placeholder='Class Name' value={this.state.name} onChange={this.handleInputChange}/><br/>
            <select name='teacher_id' value={this.state.teacher_id} onChange={this.handleInputChange}>
              <option value='-1' disabled>Faculty 1</option>
              {this.props.teachers.map((t) => {
                return <option key={t.id} value={parseInt(t.id)}>{t.first_name + ' ' + t.last_name}</option>
              })}
            </select>
            <select name='secondary_teacher_id' value={this.state.secondary_teacher_id} onChange={this.handleInputChange}>
              <option value='-1'>Faculty 2</option>
              {this.props.teachers.map((t) => {
                return <option key={t.id} value={parseInt(t.id)}>{t.first_name + ' ' + t.last_name}</option>
              })}
            </select>
            <select name='location_id' value={this.state.location_id} onChange={this.handleInputChange}>
              <option value='-1' disabled>Location</option>
              {this.props.locations.map((l) => {
                return <option key={l.id} value={parseInt(l.id)}>{l.name}</option>
              })}
            </select>
            <input type='text' name='notes' placeholder='Notes' value={this.state.notes} onChange={this.handleInputChange}/>
            <div className='date-time-pickers'>
              <Datetime
                value={this.state.start_time}
                dateFormat={'dddd, MM/DD'}
                timeFormat={false}
                timeConstraints = {{minutes: {step: 15}}}
                onChange={this.handleStartTimeChange}
                closeOnSelect={true}/>
              <Datetime
                value={this.state.start_time}
                dateFormat={false}
                timeConstraints = {{minutes: {step: 15}}}
                onChange={this.handleStartTimeChange}
                closeOnSelect={true}/>
              <span>-</span>
              <Datetime
                value={this.state.end_time}
                dateFormat={false}
                timeConstraints = {{minutes: {step: 15}}}
                onChange={this.handleEndTimeChange}
                closeOnSelect={true}/>
            </div>
            <input className='btn btn-primary' type='submit' value={this.props.classSaving ? 'Saving' : 'Save'}/><br/>
          </form>
        </div>
        <ClassGroupsForm classId={this.props.danceClass.id}/>
        {this.renderError()}
      </div>
    )
  }
}
