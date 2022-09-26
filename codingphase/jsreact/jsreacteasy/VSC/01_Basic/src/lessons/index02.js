import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// functional or stateless component.
const Header = () => {
  return (
      <header>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </header>
  )
}

class Layout extends Component {

  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render() {
    return(
      <Header />
    )
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
