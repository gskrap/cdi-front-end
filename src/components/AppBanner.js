import React from 'react'

import '../styles/AppBanner.css'

export default class AppBanner extends React.Component {
  render() {
    return (
      <div className='app-banner'>
        {(() => {
          if (this.props.loggedIn) {
            return (
              <div>
                <div className="half cdi">CDI</div>
                <div className="half log-out" onClick={this.props.logOut}>log out</div>
              </div>
            )
          } else {
            return <div>CDI 2017</div>
          }
        })()}
      </div>
    )
  }
}