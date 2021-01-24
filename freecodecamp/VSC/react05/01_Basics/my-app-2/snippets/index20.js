import React from 'react'
import ReactDOM from 'react-dom'

// Two way binding!
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstname : "",
            lastname : "",
            age : "",
            gender : "",
            destination: "",

            isVegan : false,
            isKosher : false,
            isLatoseFree : false

        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState ({
                [name] : checked
            }) :
        this.setState({
            [name] : value
        })
    }

    render() {
        return(
            <main>
                <form>
                    <input type="text" 
                            name="firstname"
                            value={this.state.firstname}
                            onChange={this.handleChange}
                            placeholder="First Name"
                        /><br />

                    <input type="text" 
                            name="lastname"
                            value={this.state.lastname}
                            onChange={this.handleChange}
                            placeholder="Last Name"
                        /><br />

                    <input type="text"
                            name="age"
                            value={this.state.age}
                            onChange={this.handleChange}
                            placeholder="Age"
                        /><br /><br />

                    <label>
                        <input type="radio"
                            name="gender"
                            value="Male"
                            checked = {this.state.gender === "Male"}
                            onChange = {this.handleChange}
                        /> Male
                    </label>
                    <br />
                    <label>
                        <input type="radio"
                            name="gender"
                            value="Female"
                            checked = {this.state.gender === "Female"}
                            onChange = {this.handleChange}
                        /> Female
                    </label>
                    <br /><br />

                    <select value={this.state.destination} 
                                name="destination"
                                onChange={this.handleChange}>
                        <option value="">Please select:</option>
                        <option value="Wilkinsburg">Wilkinburg</option>
                        <option value="Mt Lebanon">Mt Lebanon</option>
                        <option value="Pittsburgh">Pittsburgh</option>
                        <option value="Hazelwood">Hazelwood</option>
                    </select>
                    <br /><br />

                    <label>
                        <input type="checkbox"
                                name="isVegan"
                                onChange={this.handleChange}
                                checked={this.state.isVegan}
                                /> Vegan?
                    </label>
                    <br />
                    <label>
                        <input type="checkbox"
                                name="isKosher"
                                onChange={this.handleChange}
                                checked={this.state.isKosher}
                                /> Kosher?
                    </label>
                    <br />
                    <label>
                        <input type="checkbox"
                                name="isLatoseFree"
                                onChange={this.handleChange}
                                checked={this.stateisLatoseFree}
                                /> Latose Free?
                    </label>
                    <br /><br />
                    <button>Submit!</button>
                </form>
                <br />
                <h2>You have entered:</h2>
                <p>Name: {this.state.firstname} {this.state.lastname}</p>
                <p>Age: {this.state.age}</p>
                <p>Gender: {this.state.gender}</p>
                <p>Destination: {this.state.destination}</p>
                <p>Dietary Restrictions:</p>
                <p>Vegan: {this.state.isVegan?"Yes":"No"}</p><br /><br />
                <p>Kosher: {this.state.isKosher?"Yes":"No"}</p><br /><br />
                <p>Latose Free: {this.state.isLatoseFree?"Yes":"No"}</p><br /><br />
            </main>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))