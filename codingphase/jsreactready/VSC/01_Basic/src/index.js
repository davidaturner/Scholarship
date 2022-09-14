import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// React component returns JSX/Html
const App = () => {
  return(<>Hello, World!</>)
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
