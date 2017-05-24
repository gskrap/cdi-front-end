import React from 'react'
import moment from 'moment'
import Datetime from 'react-datetime'
import LittleLoader from './LittleLoader'

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

export default class ClassCreateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      teacher_id: -1,
      location_id: -1,
      start_time: moment().roundNext15Min(),
      end_time: moment().roundNext15Min(),
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this)
    this.handleEndTimeChange = this.handleEndTimeChange.bind(this)
  }

  componentDidMount() {
    this.props.getTeachers()
    this.props.getLocations()
    this.props.getGroups()
  }

  handleSubmit(e) {
    e.preventDefault()
    let dance_class = {}
    for (var key in this.state) {
      if (this.state.hasOwnProperty(key)) {
        dance_class[key] = this.state[key]
      }
    }
    dance_class['start_time'] = dance_class['start_time'].utc().format()
    this.props.classCreate(dance_class)
    this.resetFormState()
  }

  resetFormState() {
    let checks = {}
    this.props.groups.forEach((g) => {
      checks['for_group_id_' + g.id] = false
    })
    this.setState({
      name: '',
      teacher_id: -1,
      location_id: -1,
      start_time: moment().roundNext15Min(),
      end_time: moment().roundNext15Min(),
    })
    this.setState(checks)
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

  renderCheckBoxes() {
    return (
      this.props.groupsLoading ?
        <LittleLoader/> :
        this.props.groups.map((g) => {
          return (
            <div key={g.id} className='sub'>
              <span>{g.name}</span>
              <div className='check-container'>
                <input type='checkbox'
                  name={'for_group_id_' + g.id}
                  checked={this.state['for_group_id_' + g.id] ? this.state['for_group_id_' + g.id] : false}
                  onChange={this.handleInputChange}/>
              </div>
            </div>
          )
        })
    )
  }

  render() {
    return (
      <div className='class-create-form-container'>
        <form className='class-create-form' onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' name='name' placeholder='Class Name' value={this.state.name} onChange={this.handleInputChange}/><br/>
          <select name='teacher_id' value={this.state.teacher_id} onChange={this.handleInputChange}>
            <option value='-1' disabled>Teacher</option>
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
          <div className='check-row'>
            {this.renderCheckBoxes()}
          </div>
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
          <input className='btn btn-primary' type='submit' value='Submit'/><br/>
        </form>
      </div>
    )
  }
}
