import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/p1_counter/Counter'


function App() {
    return(
        <div style={container}>
            <h2>Hello, World!</h2>
            <Counter />
        </div>
    )
}

const container = {
    width: '90%',
    margin: 'auto',
    height: '800px',
    fontFamily: 'Fira Code',
    background : '#ffffcc',
    border: '1px solid #fff5cc',
    color: '#ffbb33'
}

ReactDOM.render(<App />, document.getElementById('root'));