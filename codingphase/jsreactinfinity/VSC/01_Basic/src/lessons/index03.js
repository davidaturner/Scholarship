import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const BillSantos = "Bill Santos";

// functional or stateless component
const NameIt = (props) => {
    return(
      <div className="flowers">{props.name}</div>
    )
}

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
      <div>
        <NameIt name = {this.state.name} />
        <NameIt name = {BillSantos} />        
      </div>
      // <NameIt name="Joe Santos" />
      // <div className="flowers">{this.state.name}</div>
    )
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
