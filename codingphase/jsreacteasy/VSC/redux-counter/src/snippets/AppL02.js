import React from "react";
import ReactDOM from "react-dom";
import { std25_box } from "../public/style";

// Styling
const box = {};
const box1 = {
  backgroundColor: "#ccccff",
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
      <div style={box.backgroundColor != null ? box : std25_box}>
        <p>
          <img src={this.state.photo} onClick={this.changeMartina}></img>
        </p>
        <p>Name: {this.state.fullname()}</p>
        <p>Age: {this.state.age}</p>
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));
