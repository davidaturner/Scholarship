import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Joe',
            age: 16
        }
    }
    render() {

        return (
            <div style={{width : 400, 
                        height : 200, 
                        margin: '25px 5px',
                        border: '5px solid gray',
                        background : this.state.age > 18 ? 'green' : 'red'}}>
                <p style={boxText}>This is a box!</p>
            </div>
        )
    }
}

const boxText = {
    background : 'purple',
    color: 'white',
    padding: '10px',
    width: '70%',
    margin: 'auto'
    
}
ReactDOM.render(<App />, document.getElementById('root'));