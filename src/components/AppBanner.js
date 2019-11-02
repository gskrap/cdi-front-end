import React from 'react'
import LogInFormContainer from '../containers/LogInFormContainer'

import '../styles/AppBanner.css'

export default class AppBanner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAdminLogIn: false
    }
  }

  tempStyle() {
    return {
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      boxSizing: 'border-box',
      zIndex: '1',
      backgroundColor: 'rgba(0,0,0,0.3)',
      paddingTop: '150px'
    }
  }

  render() {
    return (
      <div className='app-banner'>
        {(() => {
          // if (this.props.loggedIn) {
          if (true) {
            return (
              <div className='loggedIn'>
                <div className="split cdi"
                  onClick={() => {
                    this.props.getClasses('')
                    this.props.updateUserView('allClasses')
                    this.props.updateAdminView('allClasses')
                  }}>CDI</div>
                {/* <div className="split name">{this.props.user.first_name}</div> */}
                <div className="split name" style={{textTransform: 'capitalize'}}>{(this.props.user || {}).role || 'charlotte'}</div>
                {(() => {
                  if (this.props.loggedIn) {
                    return <div className="split log-out"><span onClick={this.props.logOut}>log out</span></div>
                  } else {
                    return (
                      <div className="split log-out">
                        <span onClick={() => {this.setState({showAdminLogIn: true})}} style={{fontSize: '30px', padding: '0px 10px'}}>
                          <i className='fa fa-cog' aria-hidden="true"></i>
                        </span>
                      </div>
                    )
                  }
                })()}
                {(() => {
                  if (this.state.showAdminLogIn && !this.props.loggedIn) {
                    return (
                      <div style={this.tempStyle()}>
                        <div style={{background: 'white', margin: '16px', borderRadius: '6px'}}>
                          <div style={{display: 'flex', justifyContent: 'flex-end', paddingTop: '8px'}}>
                            <span onClick={() => {this.setState({showAdminLogIn: false})}} style={{fontSize: '30px', padding: '0px 16px'}}>
                              <i className='fa fa-close' aria-hidden="true"></i>
                            </span>
                          </div>
                          <div className='temp-login-text'>Administrator Login</div>
                          <LogInFormContainer />
                        </div>
                      </div>
                    )
                  }
                })()}
              </div>
            )
          } else return (
            //<div>CDI</div>
            null
          )
        })()}
      </div>
    )
  }
}
