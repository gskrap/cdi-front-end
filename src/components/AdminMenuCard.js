import React from 'react'
import AdminScheduleContainer from '../containers/AdminScheduleContainer'
import UserListContainer from '../containers/UserListContainer'
import ClassCreateFormContainer from '../containers/ClassCreateFormContainer'

import '../styles/AdminMenuCard.css'

export default class AdminMenuCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'allClasses'
    }
  }

  setView(view) {
    this.setState({view: view})
  }

  selected(view) {
    return this.state.view === view
  }

  render() {
    return (
      <div>
        <div className='admin-menu'>
          <div className='top'>
            <button className={this.selected('allClasses')} onClick={() => this.setView('allClasses')}>All Classes</button>
            <button className={this.selected('createClass')} onClick={() => this.setView('createClass')}>Create Class</button>
            <button className={this.selected('editUsers')} onClick={() => this.setView('editUsers')}>Edit Users</button>
          </div>
          <div className='bottom'>
            {(() => {
              if (this.state.view === 'allClasses')
                return <AdminScheduleContainer/>
              else if (this.state.view === 'createClass')
                return <ClassCreateFormContainer/>
              else if (this.state.view === 'editUsers')
                return <UserListContainer/>
            })()}
          </div>
        </div>
      </div>
    )
  }
}
