import React from 'react'
import axios from 'axios'
import { API, TIMEOUT } from '../actions/index.js'

import '../styles/Form.css'

export default class ClassGroupsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showClassGroupsForm: false,
      groups: [],
      values: [],
      saving: false,
      classGroupIds: []
    }
  }

  componentDidMount() {
    this.getGroups()
    this.getClassGroupIds()
  }

  getGroups() {
    axios.get(API + '/groups')
      .then((response) => {
        let groups = response.data
        this.setState({groups: groups})
      })
  }

  getClassGroupIds() {
    axios.get(API + '/dance_classes/' + this.props.classId + '/groups')
      .then((response) => {
        let classGroupIds = response.data.map((d) => d.group_id)
        this.setState({classGroupIds: classGroupIds})
        this.updateGroups()
      })
  }

  setClassGroupIds() {
    setTimeout(() => {
      return axios({
        method: 'post',
        url: API + '/dance_classes/' + this.props.classId + '/groups',
        data: {values: this.state.values}
      })
        .then((response) => {
          this.setState({classGroupIds: response.data.map((d) => d.group_id)})
          this.updateGroups()
          this.setState({saving: false})
        })
    }, TIMEOUT)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({saving: true})
    this.setClassGroupIds()
  }

  checkSelection(id) {
    let newValues = this.state.values
    newValues[id] = !newValues[id]
    this.setState({values: newValues})
  }

  updateGroups() {
    let values = {}
    this.state.groups.forEach(g => {
      values[g.id] = this.state.classGroupIds.includes(g.id)
    })
    this.setState({values: values})
  }

  renderForm() {
    return (
      <form className='form group-form' onSubmit={this.handleSubmit.bind(this)}>
        <div className='row'>
          {this.state.groups.map((g) => {
            return (
              <div className={'sub'} key={g.id}>
                <input type='checkbox' checked={this.state.values[g.id]} onChange={() => {this.checkSelection(g.id)}}/>
                <div>{g.name}</div>
              </div>
            )
          })}
        </div>
        <input className='btn btn-primary btn-group' type='submit' value={this.state.saving ? 'Saving' : 'Save Groups'}/>
      </form>
    )
  }

  renderShowFormButton() {
    return (
      <div className={'btn-container'}>
        <button className='btn-primary btn-group' onClick={() => {this.setState({showClassGroupsForm: true})}}>Show / Edit Groups</button>
      </div>
    )
  }

  render() {
    return (
      this.state.showClassGroupsForm ?
        this.renderForm() :
        this.renderShowFormButton()
    )
  }
}
