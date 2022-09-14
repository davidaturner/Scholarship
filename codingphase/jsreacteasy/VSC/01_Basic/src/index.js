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

class PSBImage extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Pet Shop Boys'
    }
  }
  
  render() {
    return(
      <div className="psb">
        <img src={psb004} alt="psb" onClick={this.props.OnClick}/>
      </div>
    )
  }
}

class Layout extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Pet Shop Boys',
      ontour: true,
      ontourtrue: "Now!",
      ontourfalse : "Coming soon.",
      showsleftthistour: 15
    }
    this.clicked = this.clicked.bind(this);
    this.checkShowLeftInTheTour = this.checkShowLeftInTheTour.bind(this)
  }

  clicked = () => {
    this.setState({showsleftthistour: this.state.showsleftthistour - 1},
      () => {
        console.log("Tour date!")
        if (this.state.showsleftthistour <= 0) {
          console.log("Tour has Ended")
        }
      })
      // TODO: Move side effect. Do check regardless of clicked.
      this.checkShowLeftInTheTour();
    // if (this.state.showsleftthistour === 1) {
    //   this.setState({ontour: false},
    //     () => {
    //       console.log("New tour coming soon.")
    //   })
    // }
  }

  checkShowLeftInTheTour = () => {
    if (this.state.showsleftthistour === 1) {
      this.setState({ontour: false},
        () => {
          console.log("New tour coming soon.")
      })
    }
  }
  render() {
    return(
      <>
        <Header />
        <div className={`blue-bg 
                            ${(this.state.showsleftthistour<=3)?"red-bg":""}
                      `}>
          <div className="tour-info">
            <h3>Band Name: {this.state.name}</h3>
            <h3>On Tour?: {(this.state.ontour)?
              this.state.ontourtrue:this.state.ontourfalse}</h3>
            <h3>Shows Left This Tour: {this.state.showsleftthistour}</h3>
          </div>
          <PSBImage OnClick={this.clicked} />
        </div>
      </>
    )
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
