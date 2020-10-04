import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Martina",
      health: 55,
      level: 1,
    };
  }

  render() {
    // Set up selecting the appropriate style for
    // state.
    let label_color = color_green;
    if (this.state.health > 50) {
      label_color = color_red;
    }
    let cssclass = mystyle;
    // Return html.
    return (
      <div>
        <h1 style={cssclass}>Hello, {this.state.name}</h1>
        <br />
        <h3>
          <span style={{ color: label_color }}>Name: </span>
          {this.state.name}
        </h3>
        <h3>
          <span>Health: </span>
          {this.state.health}
        </h3>
        <h3>
          <span>Level: </span>
          {this.state.level}
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
