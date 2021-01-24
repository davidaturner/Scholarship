import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor() {
    super();
    this.state={
      name : "Joe",
      age : 37
    }
  }
  render() {
    return(
      <div style={{paddingLeft: "10px"}}>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))