import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    constructor() {
        super();
        this.state = {
            isloading: true
        }
    }

    componentDidMount() {
        setTimeout(() =>
        this.setState( {
            isloading: false
        }),
        3000)
    }

    render () {
        return (
            <div>
                {/* <Conditional isloading={this.state.isloading} /> */}
                {this.state.isloading? 
                <h2 style={{color: 'orange'}}>Loading...</h2>:
                <Conditional />}
            </div>
        )
    }
}
function Conditional() {
    return (
        <h2 style={{color: 'green'}}>Ready!</h2>
    )
}
// function Conditional(props) {
//     console.log(props.isloading)
//     if (props.isloading === true) {
//         return (
//             <h2>Loading...</h2>
//         )
//     }
//     return (
//         <h2>Ready!</h2>
//     )
// }

ReactDOM.render(<App />, document.getElementById('root'))