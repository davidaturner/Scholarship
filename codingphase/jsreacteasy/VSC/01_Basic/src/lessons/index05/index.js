import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// Import your images.
import psb004 from './img/psb004.jpg';

const Header = () => {
  return(
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact Us</li>
    </ul>
  )
}

const PSBImage = () => {
  return(
    <div className="psb">
      <img src={psb004} alt={'psb'} />
    </div>
  )
}

class Layout extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Pet Shop Boys',
      ontour: true,
      showsleftthistour: 15
    }
    this.nameClicked = this.nameClicked.bind(this);
  }

  nameClicked = () => {
    this.setState({showsleftthistour: this.state.showsleftthistour - 1},
      () => {
        console.log("Tour date!")
        if (this.state.showsleftthistour <= 0) {
          console.log("Tour has Ended")
        }
      })
    if (this.state.showsleftthistour === 1) {
      this.setState({ontour: false},
        () => {
          console.log("New tour coming soon.")
      })
    }
  }

  render() {
    return(
      <div className="container">
        <Header />
        <div className="layout">
          <div className="tour-info">
            <h3 onClick={this.nameClicked}>Band Name: {this.state.name}</h3>
            <h3>On Tour?: {(this.state.ontour)?'Now!':'Coming soon'}</h3>
            <h3 className={`healthy 
                            ${(this.state.showsleftthistour<10)?"unhealthy":""}
                      `}>Shows Left This Tour: {this.state.showsleftthistour}</h3>
          </div>
          <div className="image">
            <PSBImage />
          </div>
        </div>
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
