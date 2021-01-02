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
            <div>
                <WriteMyName name={this.state.name}></WriteMyName>
                <JustNames>
                    <i>Joseph</i><br />
                    <i>Teddy</i><br />
                    <i>Tweedy</i>
                </JustNames>
                <Footer name="Edgar"
                    age={22}
                    goodbye={() => { console.log("Goodbye, World!") }}>
                </Footer>
            </div>
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