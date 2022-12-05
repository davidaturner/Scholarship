import React, { Component } from 'react';

class App extends Component {

    render() {
        return (
            React.createElement('a', { href: 'https://www.google.com' },
                'Take me to Google.com!')
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