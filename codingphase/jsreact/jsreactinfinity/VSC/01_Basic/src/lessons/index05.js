import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// functional or stateless component
const NameItFlowers = (props) => {
    return(
      <div className="flowers" onClick={props.helloOnClick}>{props.name}</div>
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
        <NameItFlowers 
          name = {this.state.name}
          helloOnClick = {helloworld}
          // helloOnClick = {() => console.log("Hello, World!")} 
        />       
      </div>
    )
  }
}

const helloworld = () => console.log("Hello, World!");

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
