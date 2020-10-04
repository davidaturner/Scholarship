import React, { Component } from "react";
import ReactDOM from "react-dom";

// Component (class having state)
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe",
    };
  }

  render() {
    return (
      <div
        style={{ width: "200px", height: "150px", backgroundColor: "#ffe6b3" }}
      >
        Hello, {this.state.name}!
        <Howyoudoin />
      </div>
    );
  }
}

// Functional Component (const having no state; stateless)
const Howyoudoin = function () {
  return (
    <div>
      <h3>How are you doing?</h3>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
