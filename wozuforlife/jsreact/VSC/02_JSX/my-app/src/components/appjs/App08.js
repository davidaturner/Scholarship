import React, { Component } from 'react';

function groceryList(item1, item2, item3) {
  return (
    <ul>
      <li>{item1}</li>
      <li>{item2}</li>
      <li>{item3}</li>
    </ul>
  );
}

class App extends Component {

    render() {
        return (
            groceryList('Apples', 'Lemon', 'Mangos')
        )
    }
}

export default App;