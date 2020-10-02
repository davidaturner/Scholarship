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
        <Header />
        <Helloworld />
      </div>
    );
  }
} // End class

var Header = function () {
  return (
    <header>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
    </header>
  );
}; // end Header

var Helloworld = function () {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hi, I'm Martina"),
    React.createElement(
      "h3",
      null,
      "Pleased to ",
      React.createElement("em", null, "meet"),
      " you!"
    ),
    React.createElement("img", { src: "/imgs/navrat01.jpg" })
  );
  /*          
  return (
    <div>
      <h1>Hi, I'm Martina!</h1>
      <h3>
        Pleased to <em>meet</em> you!
      </h3>
      <img src="/imgs/navrat01.jpg" />
    </div>
  );
  */
}; // Helloworld

const app = document.getElementById("root");
ReactDOM.render(<Layout />, app);
