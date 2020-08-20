import React, { Component } from "react";
import ReactDOM from "react-dom";

class Layout extends Component {
  constructor() {
    super();
  }

  builder() {
    var names = ["Joe", "Fred", "David"];
    names.forEach((name) => console.log("<img src={" + name + "}></img>"));
  }

  render() {
    this.builder();
    return (
      <div>
        <img src="./images/no_uk001.jpg"></img>
      </div>
    );
  }
}

ReactDOM.render(<Layout></Layout>, document.getElementById("root"));
