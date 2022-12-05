import React, { Component } from 'react';

// const variables cannot be part of the React class.
const applesPrice = React.createElement('li', {}, '$1.00 per lb');
const apples = React.createElement('ul', {}, applesPrice);

const orangesPrice = React.createElement('li', {}, '$.70 per lb');
const oranges = React.createElement('ul', {}, orangesPrice);

const mangosPrice = React.createElement('li', {}, '$2.00 per lb');
const mangos = React.createElement('ul', {}, mangosPrice);

class App extends Component {

    // use styles in index.html
    render() {
        return (
            React.createElement(
            'ul',
            {},
            React.createElement('li', {}, 'Apples', apples),
            React.createElement('li', { className: 'flowers' }, 'Oranges', oranges),
            React.createElement('li', {}, 'Mangos', mangos))
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