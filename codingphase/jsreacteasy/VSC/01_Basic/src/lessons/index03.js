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
      health: 54,
      level: 1
    }
  }

  render() {
    return(
      <div>
        <h3>Name: {this.state.name}</h3>
        <h3 className={`healthy 
                            ${(this.state.health<55)?"unhealthy":""}
                            `}>Health: {this.state.health}</h3>
        <h3 className={'healthy unhealthy'}>Health: {this.state.health}</h3>
        <h3 className={'healthy'}>Health: {this.state.health}</h3>
        <h3 className="healthy">Health: {this.state.health}</h3>
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
