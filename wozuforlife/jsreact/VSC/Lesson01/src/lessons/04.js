import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  React.createElement(
    'ul',
    {},
    React.createElement(
      'li',
      {},
      'Apples',
      React.createElement(
        'ul',
        {},
        React.createElement('li', {}, '$1.00 per lb')
      )
    ),
    React.createElement(
      'li',
      {},
      'Oranges',
      React.createElement(
        'ul',
        {},
        React.createElement('li', {}, '$.70 per lb')
      )
    ),
    React.createElement(
      'li',
      {},
      'Mangos',
      React.createElement('ul', {}, React.createElement('li', {}, '$2.00 per lb'))
    )
  ),
  document.getElementById('root')
);

// import React from 'react/client';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// import React from 'react';
// import { createRoot }  from 'react-dom/client';
// import App from './App';

// // const App = ()=> <h1>App</h1>

// const root = createRoot( document.getElementById("root") );
// root.render( <App /> );
