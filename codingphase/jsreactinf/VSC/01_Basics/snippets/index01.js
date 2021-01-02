import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Joe'
        }
    }
    render() {
        return (
            <h1>Hi! My name is {this.state.name}.</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));