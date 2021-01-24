import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Joe',
            age: 31
        }
    }
    render() {
        const printnameandage = 
                (name, age) => 
                {
                    console.log(`${name} is ${age} years old`)
                }
        return (
            <div>
                <button onClick={printnameandage.bind(null, "Joe", "31")}>
                    Click me!
                </button><br />
            </div >
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));