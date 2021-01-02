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
        <IAmMartina />
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

var IAmMartina = function () {
  return (
    <div>
      <h1>Hi, I'm Martina!</h1>
      <h3>
        Glad to <em>meet</em> you!
      </h3>
      <img src="/imgs/navrat01.jpg" />
    </div>
  );
}; // End IAmMartina

const app = document.getElementById("root");
ReactDOM.render(<Layout />, app);
