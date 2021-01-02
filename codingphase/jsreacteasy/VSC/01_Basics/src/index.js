import React, { Component } from "react";
import ReactDOM from "react-dom";

function ageher() {
  var new_condition = (this.state.health + this.state.agevalue > this.state.healthlimit)
    ? red : green;
  this.setState({
    health: this.state.health + this.state.agevalue,
    condition: new_condition
  }, function () {
    console.log("Hey! I clicked the Girl! Her health is now " + this.state.health)
  })
}

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header></Header>
        <IAmMartina ageher={ageher}></IAmMartina>
      </div>
    )
  }
}

class IAmMartina extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Martina",
      health: 65,
      condition: green,
      agevalue: 12,
      healthlimit: 85,
      level: 1,
    };
    this.ageher = this.props.ageher.bind(this);
  }

  render() {
    return (
      <div style={container}>
        <div style={{ paddingRight: "10px" }}>
          <img src="/imgs/navrat01.jpg" onClick={this.ageher}></img>
          <h3><span style={red}>Name: </span>{this.state.name}</h3>

          <h3><span style={orange}>Health: </span>
            <span style={this.state.condition}>
              {this.state.health < 99 ? this.state.health : ">99 (DECEASED!)"}
            </span></h3>

          <h3><span style={yellowgreen}>Level: </span>{this.state.level}</h3>
        </div>
      </div>
    )
  }
}

var Header = function () {
  return (
    <header>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  )
}

//styling
const red = {
  color: "red"
}
const green = {
  color: "green"
}
const orange = {
  color: "orange"
}
const yellowgreen = {
  color: "yellowgreen"
}
const container = {
  width: "95%",
}

ReactDOM.render(<App />, document.getElementById("root"));

export { };