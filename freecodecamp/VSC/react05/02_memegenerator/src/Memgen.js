import React, { Component } from 'react'

class Memgen extends Component {
    constructor() {
        super();
        this.state = {
            topText : "",
            bottomText : "",
            randomImg : "http://i.imgflip.com/1bij.jpg",
            allMemeImgs : []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs : memes})
            })
    }
    handleChange(event) {
        const {name, value} =  event.target
        this.setState({
            [name] : value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        const rand = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randImg = this.state.allMemeImgs[rand].url
        console.log(randImg)
        this.setState({ randomImg : randImg })
    }
    render() {
        return(
            <div className="container">
                <form class="form-section" onSubmit={this.handleSubmit}>
                    <input type="text" 
                            name="topText"
                            placeholder="topText"
                            value={this.state.topText}
                            onChange={this.handleChange}
                        />
                    <input type="text" 
                            name="bottomText"
                            placeholder="bottomText"
                            value={this.state.bottomText}
                            onChange={this.handleChange}
                        />
                    <button>Generate!</button><br />
                </form>
                <div className="rand-img-section">
                    <img className="rand-img-section-img" 
                        src={this.state.randomImg} 
                        alt="No random?" />
                    <p className="rand-img-section-text rand-img-section-text-toptext">
                        {this.state.topText}</p>
                    <p className="rand-img-section-text rand-img-section-text-bottext">
                        {this.state.bottomText}</p>
                </div>
            </div>
        )
    }
}

export default Memgen