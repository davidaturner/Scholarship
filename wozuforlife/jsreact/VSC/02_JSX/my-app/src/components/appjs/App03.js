import React, { Component } from 'react';

class App extends Component {

    render() {
        return (
            <ul>
                <li>Apples</li>
                <ul>
                <li>$1.00 per lb</li>
                </ul>
                <li className="flower">Oranges</li>
                <ul>
                <li>$.70 per lb</li>
                </ul>
                <li>Mangos</li>
                <ul>
                <li>$2.00 per lb</li>
                </ul>
            </ul>
        )
    }
}

export default App;