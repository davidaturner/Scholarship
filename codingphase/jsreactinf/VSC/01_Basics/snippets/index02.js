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

// functional component
function WriteMyName() {
    return (
        <h1>Hi! My name is Justin!</h1>
    )
}

// functional component
const WhatsHerName = () => {
    return (
        <h1>What is my Name Again? I am trying to think...</h1>
    )
}

ReactDOM.render(<WhatsHerName />, document.getElementById('root'));