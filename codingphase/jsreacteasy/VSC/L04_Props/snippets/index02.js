import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Martina",
      health: 85,
      level: 1,
    };
    this.ageMartina = this.ageMartina.bind(this);
  }

  ageMartina() {
    if (this.state.health < 1) {
      console.log("STOP! She has DIED!");
    } else {
      this.setState({
        health: this.state.health - 15
      }, function() {
        console.log("Hey! I clicked Martina! Her health is now " + this.state.health)
      })
    }
  }

  render() {
    return(
      <div style={container}>
        <div style={{paddingRight : "10px"}}>
          <h3><span style={{color: "red"}}>Name: </span>{this.state.name}</h3>
          <h3><span style={{color: "orange"}}>Health: </span>{this.state.health}</h3>
          <h3><span style={{color: "yellowgreen"}}>Level: </span>{this.state.level}</h3>
        </div>
        <div>
          <img src="/martina.jpg" alt={'Missing Martina'}
            onClick={this.ageMartina}></img>
        </div>
      </div>
    )
  }
}

var Header = function() {
  return(
    <header>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  )

}
// Style
const container = {
  width: "95%",
  height: "500px",
  backgroundColor: "beige",
  padding: "20px",
  display: "flex",
  flexDirection: "row",
}

ReactDOM.render(<App />, document.getElementById("root"));
