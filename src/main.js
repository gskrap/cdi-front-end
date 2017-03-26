import axios from "axios";
'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      classes: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/dance_classes`)
      .then((response) => {
        this.setState({classes: response.data});
      });
  }

  render(){
    return (
      <ul>
        {this.state.classes.map(function(c){return <li>{c.name}</li>})}
      </ul>
    );
  }
}

render(<App />, document.getElementById('app-root'));