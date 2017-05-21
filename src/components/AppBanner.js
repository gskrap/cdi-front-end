import React from 'react'

import '../styles/AppBanner.css'

export default class AppBanner extends React.Component {
  render() {
    return (
      <div className='app-banner'>
        {(() => {
          if (this.props.loggedIn) {
            return (
              <div className='loggedIn'>
                <div className="split cdi">CDI</div>
                <div className="split name">{this.props.user.first_name}</div>
                <div className="split log-out"><span onClick={this.props.logOut}>log out</span></div>
              </div>
            )
          } else return <div>CDI 2017</div>
        })()}
      </div>
    )
  }
}
