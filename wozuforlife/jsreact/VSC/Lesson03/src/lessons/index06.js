import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import PropTypes from 'prop-types';

const App = props => {
  const user = {
    name: 'George Bailey',
    address: '1122 Drafty House',
    city: 'Bedford Falls',
    state: 'New York',
    zip: 13148
  };
  return <User person={user} items="Boots, Tie, Socks" amount={100} />;
};

const User = props => (
  <ul>
    <li>Name: {props.person.name}</li>
    <ul>
      <li>Address: {props.person.address}</li>
      <li>City: {props.person.city}</li>
      <li>State: {props.person.state}</li>
      <li>Zip: {props.person.zip}</li>
    </ul>
    <li>Items: {props.items}</li>
    <li>Paid: {String(props.paid)}</li>
    <li>Amount: {props.amount}</li>
    <li>Shipped: {String(props.shipped)}</li>
  </ul>
);

User.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.number.isRequired,
  }),
  items: PropTypes.string.isRequired,
  paid: PropTypes.bool,
  amount: PropTypes.number.isRequired,
  shipped: PropTypes.bool
};

User.defaultProps = {
  paid: false,
  shipped: false
};

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// As you can see, within the render, you are not defining the paid and 
// shipped fields. Because of the defaultProps, those fields will 
// automatically be filled in with false. The propTypes and defaultProps 
// are not required, but can help you make sure your application functions 
// the way you would expect it to.
