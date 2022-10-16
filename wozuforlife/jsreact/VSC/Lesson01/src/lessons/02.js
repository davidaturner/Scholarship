import React from 'react'
import ReactDOM from 'react-dom'
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
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
