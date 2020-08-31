import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      helloworld: "Hello, World!",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.helloworld}</h1>
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));
