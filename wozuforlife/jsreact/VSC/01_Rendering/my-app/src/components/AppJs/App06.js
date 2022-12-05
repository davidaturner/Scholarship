import React, { Component } from 'react';

class App extends Component {

    // use styles in index.html
    render() {
        return (
            React.createElement('ul', {},
                React.createElement('li', { className: 'flowers'}, 'Apples'),
                React.createElement('li', {}, 'Oranges'),
                React.createElement('li', {}, 'Mangos'))
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