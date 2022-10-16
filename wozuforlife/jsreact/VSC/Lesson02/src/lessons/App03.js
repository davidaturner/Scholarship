import React from 'react'
import './App.css';

function App() {
  return (
    React.createElement(
      'ul',
      {},
      React.createElement('li', {}, 'Apples'),
      React.createElement('li', {}, 'Oranges'),
      React.createElement('li', {}, 'Mangos')
    )
  )
}

export default App;
