import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = props => {
  return (
    <div>
      <BankAccount />
    </div>
  );
};

class BankAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      savings: {
        accountBalance: 1125.00
      },
      checking: {
        accountBalance: 530.64
      }
    };
  }

  render() {
    return (
      <div>
        <h3>Savings Account Balance: ${this.state.savings.accountBalance}</h3>
        <h3>Checking Account Balance: ${this.state.checking.accountBalance}</h3>
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

// There are two types of data that a component handles: props and state. These 
// two types of data are similar because they are both JavaScript objects. The main 
// difference is that props are passed to the component (similar to passing in 
// parameters to a function) whereas state is managed within the component (similar 
// to declaring variables within a function). State is an object that the component 
// has access to with the ability to read and write data when necessary.
