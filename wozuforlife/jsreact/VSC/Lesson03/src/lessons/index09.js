import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = props => {
  const items = [
    { name: 'Bread', price: 2.35 },
    { name: 'Milk', price: 2.0 },
    { name: 'Eggs', price: 3.15 },
    { name: 'Tea', price: 4.0 }
  ];

  return <List items={items} />;
};

const List = props => {
  const listItems = props.items.map((item, index) => (
    <li key={index}>
      {item.name}: {item.price}
    </li>
  ));

  return <ul>{listItems}</ul>;
};

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// As you can see above, the mapping function now lives within the component 
// rather than outside, which means you have to define props.items.map(). This 
// is more common practice: do some functionality within the component then 
// return markup. You also want any data you are using to live within the main 
// component. That way, all data is in one spot.
