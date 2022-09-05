import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = props => {
  return <List items={listItems} />;
};

const items = ['Bread', 'Milk', 'Eggs', 'Tea'];

const listItems = [];

// using push function.
for (let i = 0; i < items.length; i++) {
  listItems.push(<li key={i}>{items[i]}</li>);
}

const List = props => <ul>{props.items}</ul>;

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
