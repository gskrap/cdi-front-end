import axios from 'axios'
import React from 'react'
import LoadingAnimation from './LoadingAnimation'
import UserList from './UserList'
import { API, TIMEOUT } from '../actions/index.js'

export default class RollCallForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      studentsLoading: true,
      students: null
    }
  }

  componentDidMount() {
    axios.get(API + '/dance_classes/' + this.props.danceClass.id + '/students')
      .then((response) => {
        setTimeout(() => {
          this.setState({students: response.data, studentsLoading: false})
        }, TIMEOUT)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  renderForm() {
    return (
      <div>
        <UserList users={this.state.students} currentUser={this.props.currentUser} rollCall={true} rollCallClass={this.props.danceClass}/>
      </div>
    )
  }

  render() {
    return (
      this.state.studentsLoading ?
        <LoadingAnimation/> :
        this.renderForm()
    )
  }
}
