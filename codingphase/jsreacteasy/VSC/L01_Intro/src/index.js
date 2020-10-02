import React, { Component } from "react";
import ReactDOM from "react-dom";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      name: "Martina",
    };
  }
  render() {
    return (
      <div>
        <h1>Hi, I'm Martina!</h1>
        <h3>
          Pleased to <em>meet</em> you!
        </h3>
        <img src="/imgs/navrat01.jpg" />
      </div>
    );
  }
} // End class

const app = document.getElementById("root");
ReactDOM.render(<Layout />, app);
