import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Using React 17.
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
// This is the way forward. React 18 does not support ReactDOM.render()
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
