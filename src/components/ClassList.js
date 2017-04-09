import React from 'react'

import '../styles/ClassList.css'

export default class ClassList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.classes.map((c) => {
          return <li key={c.id}>{c.name}</li>
        })}
      </ul>
    )
  }
}