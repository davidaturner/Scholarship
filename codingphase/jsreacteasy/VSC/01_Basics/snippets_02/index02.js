import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Martina",
      health: 45,
      level: 1,
    };
  }

  render() {
    let health_color = color_green;
    if (this.state.health > 50) {
      health_color = color_red;
    }
    return (
      <div>
        <h1 style={mystyle}>Hello, {this.state.name}</h1>
        <br />
        <h3>
          <span>Name: {this.state.name}</span>

        </h3>
        <h3>
          <span>Health:
            <span style={{ color: health_color }}>{this.state.health}</span>
          </span>
        </h3>
        <h3>
          <span>Level: {this.state.level}</span>

        </h3>
      </div>
    );
  }
}

// Style
const mystyle = {
  color: "#4287f5",
  backgroundColor: "#f2ffe6",
  padding: "10px",
  fontFamily: "Arial",
};

const color_red = "red";
const color_green = "green";
const color_blue = "blue";

ReactDOM.render(<App />, document.getElementById("root"));
