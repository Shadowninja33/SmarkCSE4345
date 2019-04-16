import React, { Component } from 'react';
import './App.css';
import Garages from './Components/Garages/Garages';


class App extends Component {

  state = {
    currentgarages: [],

  }

  setGarages = garages => {
    this.setState(prevState => ({currentgarages: garages}));
  }

  render() {
    return (
      <div className="App">
        <Garages setGarages={g => this.setGarages(g)}/>
      </div>
    );
  }
}

export default App;
