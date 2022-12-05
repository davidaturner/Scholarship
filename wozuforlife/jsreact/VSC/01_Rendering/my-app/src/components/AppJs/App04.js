import React, { Component } from 'react';

class App extends Component {

    // using style classes from index.html
    render() {
        return (
            React.createElement('div', {},
                React.createElement('h1', { className: 'flowers' }, 'Hello World!'))
        )
    }

    // render() {
    //     return (
    //         <div>
    //             <h1>Hello, World!</h1>
    //         </div>
    //     )
    // }
}

export default App;