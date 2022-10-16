import React from 'react'
import './App.css';

const groceryList = (item1, item2, item3) => {
// function groceryList(item1, item2, item3) {
  return (
    <ul>
      <li>{item1}</li>
      <li>{item2}</li>
      <li>{item3}</li>
    </ul>
  );
}

function App() {
  return (
    groceryList('Apples', 'Pears', 'Bananas')
  )
}

export default App;
