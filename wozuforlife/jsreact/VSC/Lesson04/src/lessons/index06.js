import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = props => {
  return <Text />;
};

class Text extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'Hello World!!'
    };
  }

  update(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        <h1>{this.state.text}</h1>
      </div>
    );
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
