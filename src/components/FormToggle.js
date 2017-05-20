import React from 'react'
import RegisterFormContainer from '../containers/RegisterFormContainer'
import LogInFormContainer from '../containers/LogInFormContainer'

import '../styles/FormToggle.css'

export default class FormToggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showRegister: false
    }
  }

  render() {
    return (
      <div className='form-toggle'>
        <div className='btn-toggle-container'>
          <button className={'btn btn-toggle ' + this.state.showRegister} onClick={() => this.setState({showRegister: true})}><span className='vertical-text'>Register</span></button>
          <button className={'btn btn-toggle ' + !this.state.showRegister} onClick={() => this.setState({showRegister: false})}><span className='vertical-text'>Log In</span></button>
        </div>
        <div className='login-form-container form-container'>
        {(() => {
          if (this.state.showRegister)
            return <RegisterFormContainer />
          else
            return <LogInFormContainer />
        })()}
        </div>
      </div>
    )
  }
}
