import React, { Component } from "react";
import ReactDOM from "react-dom";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe",
    };
  }
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h3>
          Good to <em>see</em> you!
        </h3>
      </div>
    );
  }
}

const app = document.getElementById("root");
ReactDOM.render(<Layout />, app);
