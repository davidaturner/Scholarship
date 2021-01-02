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
        style={{ width: "200px", height: "155px", backgroundColor: "#ffe6b3" }}
      >
        <Header>
          <em>Hello, World!</em>
        </Header>
        <Howyoudoin name={this.state.name} />
      </div>
    );
  }
}

// Functional Components
const Header = (props) => {
  return <h1>{props.children}</h1>;
};

const Howyoudoin = function (props) {
  return (
    <div>
      <h3>How are you doing, {props.name}?</h3>
      <Dosomething
        opName="Add"
        a={5}
        b={7}
        op={() => console.log("Op executed")}
      />
    </div>
  );
};

class Dosomething extends Component {
  constructor() {
    super();
    this.state = {
      name: "Bobby",
      a: 8,
      b: 6,
    };
    this.add = this.add.bind(this);
  }
  add(props) {
    return props.a + props.b;
  }
  render() {
    return (
      <div onClick={this.props.op}>
        {this.props.opName}: <br />
        {this.props.a} + {this.props.b} = {this.add(this.props)} <br />
        {this.state.a} + {this.state.b} = {this.add(this.state)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
