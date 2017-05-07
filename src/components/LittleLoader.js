import React from 'react'

import '../styles/LittleLoader.css'

export default class LittleLoader extends React.Component {
  render() {
    return (
      <div className='little-loader-container'>
        <span className='little-loader'><span className='little-loader-inner'></span></span>
      </div>
    )
  }
}
