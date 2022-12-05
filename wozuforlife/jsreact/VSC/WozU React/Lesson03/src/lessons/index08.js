import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = props => {
  const items = ['Bread', 'Milk', 'Eggs', 'Tea'];
  return <List items={items} />;
};

// using map function. Note the index.
const List = props => {
  const listItems = props.items.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  return <ul>{listItems}</ul>;
};

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// When you are mapping over the items array, it returns another array 
// of React.createElement() of each list item. Behind the scenes, this 
// would look like below:
// const listItems = [
//   React.createElement('li', {}, 'Bread'),
//   React.createElement('li', {}, 'Milk'),
//   React.createElement('li', {}, 'Eggs'),
//   React.createElement('li', {}, 'Tea')
// ];
