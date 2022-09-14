import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// functional or stateless component
const App = (props) => {
    return(
      <div className="flowers">{props.name}</div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="Joe Santos"/>
  </React.StrictMode>
);
