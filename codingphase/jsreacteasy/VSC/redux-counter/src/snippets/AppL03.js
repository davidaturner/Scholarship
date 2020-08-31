import React from "react";
import ReactDOM from "react-dom";
import { std25_box } from "../public/style";

// Styling
const box = {
  backgroundColor: "#ccccff",
  width: "25%",
  padding: "25px",
  marginLeft: "40px",
};

const menu = {
  display: "inline-block",
  left: "0",
  padding: "20px",
  border: "1px solid #ccccff",
};
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photo: "../photos/navrat02.jpg",
      firstname: "Martina",
      lastname: "Navratilova",
      age: 63,
      fullname: () => this.state.firstname + " " + this.state.lastname,
    };

    this.changeMartina = this.changeMartina.bind(this);
  }

  changeMartina() {
    this.setState(
      {
        photo: "../photos/navrat03.jpg",
      },
      () => {
        console.log("Martina's photo updated.");
      }
    );
  }
  render() {
    return (
      <div>
        <Header></Header>
        <Helloworld></Helloworld>
        <div style={box.backgroundColor != null ? box : std25_box}>
          <p>
            <img src={this.state.photo} onClick={this.changeMartina}></img>
          </p>
          <p>Name: {this.state.fullname()}</p>
          <p>Age: {this.state.age}</p>
        </div>
      </div>
    );
  }
}
// Helloworld stateless component
var Helloworld = function () {
  return React.createElement(
    "h1",
    { style: { marginLeft: "40px" } },
    "Hello, World!"
  );
};

// Header component
var Header = function () {
  return React.createElement(
    "ul",
    { style: { listStyleType: "none" } },
    React.createElement("li", { style: menu }, "Home"),
    React.createElement("li", { style: menu }, "About"),
    React.createElement("li", { style: menu }, "Contact")
  );
};

ReactDOM.render(<App></App>, document.getElementById("root"));
