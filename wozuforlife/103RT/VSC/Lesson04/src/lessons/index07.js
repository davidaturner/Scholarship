import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = props => {
  return <BankAccount />;
};

class BankAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accountBalance: 2222.22
    };
  }

  increment() {
    this.setState({ accountBalance: this.state.accountBalance + 1 });
  }

  render() {
    return (
      <div>
        <h3>Account Balance: ${this.state.accountBalance}</h3>
        <button onClick={this.increment.bind(this)}>Increase Amount</button>
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
