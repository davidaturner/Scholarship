import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Joe",
      health: 55,
      level: 1,
    };
  }

  render() {
    const mystyle = {
      color: "#4287f5",
      backgroundColor: "#f2ffe6",
      padding: "10px",
      fontFamily: "Arial",
    };
    return (
      <div>
        <h1 style={mystyle}>Hello, World!</h1>
        <br />
        <h3>
          <span style={{ color: "#5a42f5", paddingLeft: "10px" }}>Name: </span>
          {this.state.name}
        </h3>
        <h3>
          <span style={{ color: "#5a42f5", paddingLeft: "10px" }}>
            Health:{" "}
          </span>
          {this.state.health}
        </h3>
        <h3>
          <span style={{ color: "#5a42f5", paddingLeft: "10px" }}>Level: </span>
          {this.state.level}
        </h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
