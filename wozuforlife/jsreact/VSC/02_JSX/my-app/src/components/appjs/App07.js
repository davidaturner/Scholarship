import React, { Component } from 'react';

const groceryList = (
  <ul>
    <li>Apples</li>
    <ul>
      <li>$1.00 per lb</li>
    </ul>
    <li>Oranges</li>
    <ul>
      <li>$.70 per lb</li>
    </ul>
    <li>Mangos</li>
    <ul>
      <li>$2.22 per lb</li>
    </ul>
  </ul>
)

class App extends Component {

    render() {
        return (
            groceryList
        )
    }
}

export default App;