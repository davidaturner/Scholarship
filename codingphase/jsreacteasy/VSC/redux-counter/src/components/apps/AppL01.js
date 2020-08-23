import React from "react";
import ReactDOM from "react-dom";
import { background } from "../public/style";

// Styling
const box = {
  backgroundColor: "#ffffcc",
  width: "25%",
  padding: "25px",
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
  }

  render() {
    return (
      <div style={box}>
        <p>
          <img src={this.state.photo}></img>
        </p>
        <p>Name: {this.state.fullname()}</p>
        <p>Age: {this.state.age}</p>
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));
