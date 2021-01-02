import React, { Component } from "react";
import ReactDOM from "react-dom";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <IAmMartina />
        <Header />
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
}; // End "dumb" Component

class IAmMartina extends Component {
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
          Glad to <em>meet</em> you!
      </h3>
        <img src="/imgs/navrat01.jpg" />
      </div>
    );
  }

}; // End class

const app = document.getElementById("root");
ReactDOM.render(<Layout />, app);
