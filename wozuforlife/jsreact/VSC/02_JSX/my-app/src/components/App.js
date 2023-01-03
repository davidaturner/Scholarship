import React, { Component } from 'react';

const mytable = (
    <table>
        <thead>
            <tr>
                <th>State</th>
                <th>Population</th>
                <th>Capital</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th className="red">Idaho</th>
                <th></th>
                <th>Boise</th>
            </tr>
            <tr>
                <th>Tennessee</th>
                <th>6.651 million</th>
                <th>Nashville</th>
            </tr>
            <tr>
                <th>Maine</th>
                <th>1.331 million</th>
                <th>Augusta</th>
            </tr>
            <tr>
                <th>Wisconsin</th>
                <th>5.779 million</th>
                <th>Madison</th>
            </tr>
        </tbody>
    </table>
)

class App extends Component {

    render() {
        return (
            mytable
        )
    }
}

export default App;