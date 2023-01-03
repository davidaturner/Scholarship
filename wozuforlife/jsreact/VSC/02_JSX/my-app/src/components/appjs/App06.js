import React, { Component } from 'react';

const item1 = 'Apples';
const item1Price = '$1.00 per lb';
const item2 = 'Oranges';
const item2Price = '$.70 per lb';
const item3 = 'Mangos';
const item3Price = '$2.00 per lb';

class App extends Component {

    render() {
        return (
            <ul class="flower">
                <li>{item1}</li>
                <ul>
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
}

export default App;