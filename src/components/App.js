import React from 'react'

export default class App extends React.Component {
  componentDidMount() {
    this.props.getClasses()
  }

  render() {
    return (
      <div>
        <h1>{this.props.color}</h1>
        {(() => {
          if (this.props.appLoading) {
            return <h2>Loading</h2>
          } else {
            return (
              <ul>
                {this.props.classes.map((c) => {return <li key={c.id}>{c.name}</li>})}
              </ul>
            )
          }
        })()}
        <button onClick={() => this.props.changeColor("black")}>Change Color</button>
      </div>
    )
  }
}