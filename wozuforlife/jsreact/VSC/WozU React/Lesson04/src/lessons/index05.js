import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = props => {
  return <Text />;
};

class Text extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Hello World!!'
    };
  
  }
  render() {
    return <h1>{this.state.text}</h1>;
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// When updating the state, you need to use the setState() method and the state 
// should never be updated directly, like below:
// // NEVER DO THIS
// this.state.accountBalance = 10000;
