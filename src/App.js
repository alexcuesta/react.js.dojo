import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      number: 3,
      people: [
        {craft: "ISS", name: 'Peggy Mock'},
        {craft: "ISS", name: 'Fyodor Mock'},
        {craft: "ISS", name: 'Jack Mock'}
      ]
    }
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
