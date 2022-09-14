import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// functional or stateless component.
// const Header = () => {
//   return (
//       <header>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact Us</li>
//         </ul>
//       </header>
//   )
// }

class Layout extends Component {

  constructor() {
    super()
    this.state = {
      name: 'Joe',
      health: 74,
      level: 1
    }
    // bind event for click action.
    this.clickedHey = this.clickedHey.bind(this)
  }

  clickedHey = () => {
    // setState
    // state variable: state action.
    // callback function AFTER action is set.
    this.setState({health: this.state.health - 18},
      () => {
        console.log("Health has been reduced!")
        if (this.state.health <= 0) {
          console.log("You're DEAD!")
        }
      })
  };

  render() {
    return(
      <div>
        <h1 onClick={this.clickedHey}>Hey!</h1>
        <h3>Name: {this.state.name}</h3>
        <h3 className={`healthy 
                            ${(this.state.health<55)?"unhealthy":""}
                            `}>Health: {this.state.health}</h3>
        <h3>Level: {this.state.level}</h3>
      </div>
    )
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
