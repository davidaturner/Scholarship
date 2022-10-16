import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// functional or stateless component
const NameItFlowers = (props) => {
    return(
      <div>
        <div className="flowers">{props.name}</div>
        <h6><em>{props.children}</em></h6>
      </div>
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
        <NameItFlowers name = {this.state.name}>
          {/* Everything between component tags are children. */}
          <p>Joe Sloe</p>   
          <p>Mickey Bucket</p>  
        </NameItFlowers>
      </div>
    )
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
