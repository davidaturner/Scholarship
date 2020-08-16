import React, { Component } from "react";
import ReactDOM from "react-dom";

class Layout extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <img src="./images/no_uk001.jpg"></img>
      </div>
    );
  }
}

ReactDOM.render(<Layout></Layout>, document.getElementById("root"));
