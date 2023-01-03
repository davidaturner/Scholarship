import React, { Component } from 'react';

const item1 = 'Apples';
const item2 = 'Oranges';
const item3 = 'Mangos';

class App extends Component {

    render() {
        return (
            <ul>
                <li className="flower">{item1}</li>
                <li>{item2}</li>
                <li>{item3}</li>
            </ul>
        )
    }
}

export default App;