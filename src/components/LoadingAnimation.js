import React from 'react'

import "../styles/LoadingAnimation.css"

export default class LoadingAnimation extends React.Component {
  render() {
    return (
      <div className="loading-animation-container">
        <span className="loader"><span className="loader-inner"></span></span>
      </div>
    )
  }
}