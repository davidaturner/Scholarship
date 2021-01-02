import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Martina",
      health: 55,
      condition: color_green,
      level: 1,
    };
    this.checkhhealth = this.checkhhealth.bind(this);
  }

  checkhhealth() {
    let condition_color = color_green;
    if (this.state.health > 50) {
      condition_color = color_red;
    } else {
      condition_color = color_green;
    }
    this.setState({
      condition: condition_color
    }, function () {
      console.log('I CLICKED A GIRL!')
    })
  }

  render() {
    return (
      <div>
        <h1 style={mystyle}>Hello, {this.state.name}</h1>
        <br />
        <div><img src="/imgs/navrat01.jpg" alt="martina pic"
          onClick={this.checkhhealth}></img></div>
        <h3>
          <span>Name: </span>
          {this.state.name}
        </h3>
        <h3>
          <span>Health:
            <span style={{ color: this.state.condition }}>
              {this.state.health}
            </span>
          </span>

        </h3>
        <h3>
          <span>Level: {this.state.level}</span>
        </h3>
      </div>
    );
  }
}

// Style
const mystyle = {
  color: "#4287f5",
  backgroundColor: "#f2ffe6",
  padding: "10px",
  fontFamily: "Arial",
};

const color_red = "red";
const color_green = "green";
const color_blue = "blue";

ReactDOM.render(<App />, document.getElementById("root"));
