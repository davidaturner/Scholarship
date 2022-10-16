import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const BillSantos = "Bill Santos";

// functional or stateless component
const NameItFlowers = (props) => {
    return(
      <div className="flowers">{props.name}</div>
    )
}

// class component
class NameIt extends React.Component {
  constructor() {
    super();
    // in addition to a class component having implicit props,
    // a class component has state.
    this.state = {
      defaultcolor: "red"
    }
  }
  render() {
    return(
      <div>
        <div className={this.state.defaultcolor}>{this.props.name}</div>    
      </div>
    )
  }
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
        <NameItFlowers name = {this.state.name} />
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
