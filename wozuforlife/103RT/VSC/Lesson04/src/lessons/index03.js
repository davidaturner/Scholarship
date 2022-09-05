import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const GroceryList = props => {
  return (
    <ul>
      <li>{props.item1}</li>
      <li>{props.item2}</li>
      <li>{props.item3}</li>
    </ul>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GroceryList item1="Apples" item2="Oranges" item3="Mangos" />
    {/* <App /> */}
  </React.StrictMode>
);

// Fundamentally, a component is just a function but instead accepts 
// props (properties) and returns JSX markup. 

// The kind of component is known as a Stateless Component. Components 
// always have a single parameter, which is the props object, and returns 
// a React element. A stateless component is a function and can only 
// display what's in the props object that's passed in — there is no state 
// that is maintained (like a class).

