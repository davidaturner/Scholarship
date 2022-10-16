import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// flowers class found in index.css
ReactDOM.render(
  React.createElement(
    'div',
    {},
    React.createElement('h1', { className: 'flowers' }, 'Hello World!')
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
