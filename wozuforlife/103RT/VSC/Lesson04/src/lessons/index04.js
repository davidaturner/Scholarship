import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Component, though props unused.
const App = props => {
  return (
    <div>
      <Hello name="Nikki" />
      <Hello name="Michael" />
      <Hello name="Andrew" />
    </div>
  );
};

// Component
const Hello = props => (
  <div>
    <h1>Hello, {props.name}!</h1>
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// As you progress through React and build applications, stateless components 
// will comprise a vast majority of your applications. They allow you to remain 
// organized and break larger functions into smaller functions that you can later 
// rely on for performance optimizations and clean, concise, legible code.

