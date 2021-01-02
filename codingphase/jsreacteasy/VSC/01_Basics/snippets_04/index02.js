import React from "react";
import ReactDOM from "react-dom";
import { container, userInfo, celebImage } from "./styles";

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
          <h3><span style={{color: "yellowgreen"}}>Level: </span>{this.state.level}</h3>
        </div>
        <CelebImage health = {this.state.health} ageMartina = {this.ageMartina}/>
      </div>
    )
  }
}

class CelebImage extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return(
        <div>
          <img src="/martina.jpg" alt={'Missing Martina'}
            onClick={this.props.ageMartina}></img>
          <h3><span style={{color: "orange"}}>Health: </span>
          {(this.props.health>0)?this.props.health:"0 (DEAD!)"}</h3>
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

ReactDOM.render(<App />, document.getElementById("root"));

export{};