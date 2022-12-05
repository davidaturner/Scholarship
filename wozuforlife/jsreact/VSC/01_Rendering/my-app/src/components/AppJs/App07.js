import React, { Component } from 'react';

class App extends Component {

    // use styles in index.html
    render() {
        return (
  React.createElement(
    'ul',
    { className: 'flowers' },
    React.createElement(
      'li',
      {},
      'Apples',
      React.createElement(
        'ul',
        {},
        React.createElement('li', {}, '$1.00 per lb')
      )
    ),
    React.createElement(
      'li',
      {},
      'Oranges',
      React.createElement(
        'ul',
        {},
        React.createElement('li', {}, '$.70 per lb')
      )
    ),
    React.createElement(
      'li',
      {},
      'Mangos',
      React.createElement('ul', {}, React.createElement('li', {}, '$2.00 per lb'))
    )
  )
        )
    }

    // render() {
    //     return (
    //         <div>
    //             <h1>Hello, World!</h1>
    //         </div>
    //     )
    // }
}

export default App;