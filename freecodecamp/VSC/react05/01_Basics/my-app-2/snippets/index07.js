import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return  (
      <div>
      <Header name="frank" />
      <Greeting />
      </div>
    )
  }
}

class Header extends Component {
  render(props) {
    return (
      <header>
        <p>Welcome, {this.props.name}!</p>
      </header>
    )
  }
}

class Greeting extends Component {
  constructor() {
    super();
    this.state={
      name: "Joe"
    }
  }
  render() {
    return( 
      <div>
        <p>Welcome, also Director {this.state.name}!</p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'));

