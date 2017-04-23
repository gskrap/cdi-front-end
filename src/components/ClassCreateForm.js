import React from 'react'

import '../styles/ClassCreateForm.css'

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
          <input className='btn btn-primary' type='submit' value='Submit'/><br/>
        </form>
      </div>
    )
  }
}