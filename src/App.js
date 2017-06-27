import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      people: []
    }
  }

  componentWillMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(result => this.setState(result))
  }

  render() {
    const { number, people} = this.state
    return (
      <div className="App">
        <h1>How many people are in space?</h1>
        <span>{this.state.number}</span>
        <ul>
          {people.map(astrounat => <li><b>{astrounat.craft}</b> - {astrounat.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
