import React from 'react'
import MyAppFormRendered from './MyAppFormRendered'

class MyAppForm extends React.Component {
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
            <MyAppFormRendered 
                handleChange={this.handleChange}
                data = {this.state} />
        )
    }
}

export default MyAppForm