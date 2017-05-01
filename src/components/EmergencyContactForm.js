import React from 'react'

import '../styles/Form.css'

export default class EmergencyContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }
  }

  render() {
    if (!this.props.user.emergency_contact_id)
      return (
        <div>
          <h2 className="warning">please provide emergency contact information</h2>
          <button className="btn btn-primary" onClick={() => this.setState({showForm: true})}>OK</button>
          {(() => {
            if (this.state.showForm)
            return <h2>FORM</h2>
          })()}
        </div>
      )
    else
      return null
  }
}