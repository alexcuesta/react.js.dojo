import React, { Component } from 'react';
import logo from './logo.svg';
import {Astrounat} from './astrounat'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      error: null,
      number: 0,
      people: []
    }
  }

  componentWillMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(result => this.setState({...this.state, loaded: true, ...result}))
      .catch(error => this.setState({...this.state, error:true}))
  }

  render() {
    console.log("Rendering..")
    console.log(this.state)
    const { number, people, loaded, error} = this.state
    return (
      <div className="App">
        {!loaded && <span>Looking at the sky!</span>}
        {error && <span>Cannot see the sky</span>}
        {loaded && !error &&
        <div>
          <h1>How many people are in space?</h1>
          <span>{this.state.number}</span>
          <ul>
            {people.map(astrounat => (
              <Astrounat
                key={astrounat.name}
                name={astrounat.name}
                craft={astrounat.craft}
              />
            ))}
          </ul>
        </div>
        }
      </div>
    );
  }
}

export default App;
