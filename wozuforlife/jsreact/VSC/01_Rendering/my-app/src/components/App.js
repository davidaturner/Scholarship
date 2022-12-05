import React, { Component } from 'react';

// const variables cannot be part of the React class.
const applesPrice = React.createElement('li', {}, '$1.00 per lb');
const applesPrice2 = React.createElement('li', {}, '$1.20 per lb');
const applesPrice3 = React.createElement('li', {}, '$0.85 per lb');
const apples = React.createElement('ol', {}, applesPrice, applesPrice2, applesPrice3);

const orangesPrice = React.createElement('li', {}, '$.70 per lb');
const orangesPrice2 = React.createElement('li', { className: 'flowers'}, '$.70 per lb');
const orangesPrice3 = React.createElement('li', {}, '$.70 per lb');
const oranges = React.createElement('ol', {}, orangesPrice, orangesPrice2, orangesPrice3);

const mangosPrice = React.createElement('li', {}, 
                        React.createElement('a', 
                                            { href: 'https://www.google.com' }, 
                                            'www.google.com'));
const mangosPrice2 = React.createElement('li', {}, '$2.00 per lb');
const mangosPrice3 = React.createElement('li', {}, '$2.00 per lb');
const mangos = React.createElement('ol', {}, mangosPrice, mangosPrice2, mangosPrice3);

class App extends Component {

    // use styles in index.html
    render() {
        return (
            React.createElement(
                'div',
                {},
                React.createElement('h1', {}, 'My Favorite Things'),
                React.createElement(
                    'ul',
                    { className: 'fruits' },
                    React.createElement('li', {}, 'Apples', apples),
                    React.createElement('li', {}, 'Oranges', oranges),
                    React.createElement('li', {}, 'Mange', mangos))
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