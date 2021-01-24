import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    constructor() {
        super();
        this.state = {
            loggedin : false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({
            loggedin: !prevState.loggedin
        }))
    }

    render () {
        return (
            <div>
                <button onClick={this.handleClick}>Change User Status</button>
                <h2>You are currently {this.state.loggedin===false?"logged out" : "logged in"}</h2>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'))