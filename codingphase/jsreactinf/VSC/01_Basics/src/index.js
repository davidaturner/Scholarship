import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const users = ['Joe', 'Tommy', 'Lindy', 'Jane'];

function Listusers() {
    return (
        <div>
            {
                users.map((user, index) => {
                    return (
                        <div key={index}>{user}</div>
                    )
                })
            }
        </div>
    )
}
class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Joe',
            age: 31
        }
    }

    showNotification() {
        if (this.state.age >= 18) {
            return `You can get into the Club because in age you are Legal!`;
        }
        else {
            return `You can't get into the Club because in age you are Not Legal!`;
        }
    }
    render() {
        return (
            <div>
                <WriteMyName name={this.state.name}></WriteMyName>
                <i style={{ fontSize: 32 }}><Listusers></Listusers></i>
                <h3>{this.showNotification()}</h3>

                <Footer name="Edgar"
                    age={22}
                    goodbye={() => { console.log("Goodbye, World!") }}>
                </Footer>
            </div >
        )
    }
}

class Footer extends Component {
    constructor() {
        super();
        this.state = {
            name: "Justin"
        }
    }
    render() {
        return (

            <footer onClick={this.props.goodbye}>
                {this.props.name}, {this.props.age}<br />
            </footer>
        )
    }
}

// functional component
function WriteMyName(props) {
    return (
        <h1>Hi! My name is {props.name}!</h1>
    )
}

// functional
function JustNames(props) {
    return (
        <h1>{props.children}</h1>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));