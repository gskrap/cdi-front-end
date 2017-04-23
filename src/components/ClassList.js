import React from 'react'
import ClassCard from './ClassCard'

import '../styles/ClassList.css'

export default class ClassList extends React.Component {
  render() {
    return (
      <div>
        {this.props.classes.map((c) => {
          return <ClassCard key={c.id} class={c}/>
        })}
      </div>
    )
  }
}