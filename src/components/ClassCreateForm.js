import React from 'react'
import moment from 'moment'
import Datetime from 'react-datetime'

import '../styles/ClassCreateForm.css'
import '../styles/Datetime.css'

export default class ClassCreateForm extends React.Component {
  componentDidMount() {
    this.props.getTeachers()
  }

  handleSubmit(e) {
    e.preventDefault()
    let dance_class = {}
    for (const field in this.refs) {
      dance_class[field] = this.refs[field].value
    }
    dance_class['startTime'] = moment(document.getElementsByClassName('rdt')[0].firstChild.value, "MM/DD/YYYY h:mm A").utc().format()
    this.props.classCreate(dance_class)
  }

  render() {
    return (
      <div className='class-create-form-container'>
        <form className='class-create-form' onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' ref='name' placeholder='name'/><br/>
          <select ref='teacherId'>
            {this.props.teachers.map((t) => {
              return <option key={t.id} value={t.id}>{t.first_name + ' ' + t.last_name}</option>
            })}
          </select>
          <Datetime defaultValue="Date & Time"/>
          <input className='btn btn-primary' type='submit' value='Submit'/><br/>
        </form>
      </div>
    )
  }
}