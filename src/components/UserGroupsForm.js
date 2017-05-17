import React from 'react'

import '../styles/Form.css'

export default class UserGroupsForm extends React.Component {
  // handleSubmit(e) {
  //   e.preventDefault()
  //   let session = {}
  //   for (const field in this.refs) {
  //     session[field] = this.refs[field].value
  //   }
  //   this.props.logIn(session)
  // }

  render() {
    return (
      <div>
        <h3>Groups</h3>
        <form>
          {this.props.userGroups.map((g) => {
            return (
              <div key={g.id}>
                <div>
                  <div>{g.name}</div>
                  <input type="checkbox" checked={false} onClick={{}}/>
                </div>
              </div>
            )
          })}
        </form>
      </div>
    )
  }
}
