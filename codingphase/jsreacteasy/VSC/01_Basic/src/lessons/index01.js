import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

class Layout extends Component {

  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render() {
    return(
      <h1>Hey</h1>
    )
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
