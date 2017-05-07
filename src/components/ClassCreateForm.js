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
      name: '',
      teacher_id: -1,
      start_time: moment().roundNext15Min()
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  componentDidMount() {
    this.props.getTeachers()
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
  }

  handleInputChange(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({[name]: value})
  }

  handleDateChange(date) {
    this.setState({start_time: date})
  }

  render() {
    return (
      <div className='class-create-form-container'>
        <form className='class-create-form' onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' name='name' placeholder='Class Name' value={this.state.className} onChange={this.handleInputChange}/><br/>
          <select name='teacher_id' value={this.state.teacher_id} onChange={this.handleInputChange}>
            <option value='-1' disabled>Teacher</option>
            {this.props.teachers.map((t) => {
              return <option key={t.id} value={parseInt(t.id)}>{t.first_name + ' ' + t.last_name}</option>
            })}
          </select>
          <div className='check-row'>
            {this.props.groups.map((g) => {
              return (
                <div className="sub">
                  <span>{g.name}</span>
                  <div className="check-container">
                    <input type="checkbox"
                      name={'for_group_id_' + g.id}
                      checked={this.state['for_group_id_' + g.id] ? this.state['for_group_id_' + g.id] : false}
                      onChange={this.handleInputChange}/>
                  </div>
                </div>
              )
            })}
          </div>
          <Datetime
            value={this.state.start_time}
            dateFormat={"dddd, MM/DD"}
            timeConstraints = {{minutes: {step: 15}}}
            onChange={this.handleDateChange}
            closeOnSelect={true}/>
          <input className='btn btn-primary' type='submit' value='Submit'/><br/>
        </form>
      </div>
    )
  }
}
