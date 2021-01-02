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
            <WriteMyName name={this.state.name}></WriteMyName>
        )
    }
}

// functional component
function WriteMyName(props) {
    return (
        <h1>Hi! My name is {props.name}!</h1>
    )
}

// functional component
const WhatsHerName = () => {
    return (
        <h1>What is my Name Again? I am trying to think...</h1>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));