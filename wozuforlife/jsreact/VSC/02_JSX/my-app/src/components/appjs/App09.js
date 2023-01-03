import React, { Component } from 'react';

const groceryList = (
  item1,
  item1Price,
  item2,
  item2Price,
  item3,
  item3Price
) => {
  return (
    <ul>
      <li>{item1}</li>
      <ul className="flower">
        <li>{item1Price}</li>
      </ul>
      <li>{item2}</li>
      <ul>
        <li>{item2Price}</li>
      </ul>
      <li>{item3}</li>
      <ul>
        <li>{item3Price}</li>
      </ul>
    </ul>
  )
}

class App extends Component {

    render() {
        return (
            groceryList(
                'Apples',
                '$1.00 per lb',
                'Oranges',
                '$.70 per lb',
                'Mangos',
                '$2.26 per lb'
            )
        )
    }
}

export default App;