import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    constructor() {
        super();
        this.state = {
            unreadMessages: [
                // "Call your mom!",
                // "New spam available. Ignore?"
            ]
        }
    }

    render () {
        return (
            <div>
                {this.state.unreadMessages.length>0 &&
                <h2>You have {this.state.unreadMessages.length} unread messages</h2>}
                {/* <h2>You have {this.state.unreadMessages.length} unread messages</h2> */}
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'))