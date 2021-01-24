import React from 'react';
import ReactDOM from 'react-dom';

function handleOnClick() {
  console.log("I clicked!")
}

function handleMouseOver() {
  console.log("Hovered")
}

function App() {
  return(
    <div>
      <img onMouseOver={handleMouseOver}src="https://via.placeholder.com/250" 
      alt="placeholder"/>
      <br />
      <br />
      <button onClick={handleOnClick}>Click Me!</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root'));

