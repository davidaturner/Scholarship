import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }

    // Done at the beginning of the Component lifecycle.
    // NOT called again with each re-rendering.
    componentDidMount() {

    }

    // Should Component re-render?
    // Increase performance and integrity
    shouldComponentUpdate() {

    }

    // Place to clean up code before
    // Component goes away.
    componentWillUnmount() {

    }
   
    // Lifecycle method when any change is detected.
    // Can be re-run multiple times in component life.
    // Even when there is no significant change.
    render() {
        return(
            <div>
                <p>Code goes here!</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))