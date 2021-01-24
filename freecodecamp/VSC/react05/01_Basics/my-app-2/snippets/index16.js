import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            character : {},
            loading: false
        }
    }
    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.dev/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    character : data,
                    loading : false
                })
            })
    }
    render() {
        const text = this.state.loading ? "Loading..."
                        : this.state.character.name
        return(
            <h3>{text}</h3>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))