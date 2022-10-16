import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = props => {
  return (
    <div>
      <Hello name="Nikki" />
      <Hello name="Michael" />
      <Hello name="Andrew" />
    </div>
  );
};

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
}

// const Hello = props => {
//   return (
//     <div>
//       <h1>Hello, {props.name}!</h1>
//     </div>
//   );
// };

// You may have noticed that the render function does not have any parameters. 
// Props are accessed differently when using full React components and are available 
// as this.props.

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// One example where a stateless component would definitely not work is 
// embedding a non-React component on a page. This is common if you want to 
// reuse an existing JavaScript library such as a calendar control, color picker, 
// or auto-complete field.
