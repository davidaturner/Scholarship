import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// class component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Joe Santos"
    }
  }
  render() {
    return(
      <div className="flowers">{this.state.name}</div>
    )
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
