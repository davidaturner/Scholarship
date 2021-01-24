import React from 'react'
import ReactDOM from 'react-dom'

// Two way binding!
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstname : "",
            lastname : "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.submit = this.submit.bind(this)
    }

    //Also two way binding EXCEPT here
    //The State is UPDATED before the UI
    handleChange(event) {
        const {name, value} = event.target // Deconstruction
        this.setState({
            [name] : value
        })
    }

    submit() {
        console.log("Submitted!")
    }

    render() {
        return(
            <div>
                <form onSubmit={this.submit}>
                    <input type="text" name = "firstname"
                    value={this.state.firstname}
                    placeholder="First Name"
                    onChange={this.handleChange} />
                    <br />
                    <input type="text" name = "lastname"
                    value={this.state.lastname}
                    placeholder="Last Name"
                    onChange={this.handleChange} />
                    <br />
                    <button>Submit</button>
                </form>
                <h2>{this.state.firstname} {this.state.lastname}</h2>
            </div>
        )
    }
}

// Discard.
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             firstname : "",
//             lastname : ""
//         }
//         this.handleChangeFN = this.handleChangeFN.bind(this)
//         this.handleChangeLN = this.handleChangeLN.bind(this)
//     }

//     //Having a handleChange for each item on a Form
//     //In inefficient and ultimately unpractical.
//     handleChangeFN(event) {
//         this.setState({
//             firstname : event.target.value
//         })
//     }

//     handleChangeLN(event) {
//         this.setState({
//             lastname : event.target.value
//         })
//     }

//     render() {
//         return(
//             <div>
//                 <form>
//                     <input type="text" placeholder="First Name"
//                     onChange={this.handleChangeFN} />
//                     <br />
//                     <input type="text" placeholder="Last Name"
//                     onChange={this.handleChangeLN} />
//                 </form>
//                 <h2>{this.state.firstname} {this.state.lastname}</h2>
//             </div>
//         )
//     }
// }

ReactDOM.render(<App />, document.getElementById('root'))