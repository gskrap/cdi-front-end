import React from 'react'
import UserListContainer from '../containers/UserListContainer'
import ClassCreateFormContainer from '../containers/ClassCreateFormContainer'

import '../styles/AdminMenuCard.css'

export default class AdminMenuCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'createClass'
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
        <h1>Admin Menu</h1>
        <div className='admin-menu'>
          <div className='left'>
            <button className={this.selected('createClass')} onClick={() => this.setView('createClass')}>Create Class</button>
            <button className={this.selected('editUsers')} onClick={() => this.setView('editUsers')}>Edit Users</button>
          </div>
          <div className='right'>
            {(() => {
              if (this.state.view === 'createClass')
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