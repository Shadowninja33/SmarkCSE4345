import React, { Component } from 'react';
import './App.css';
import Garages from './Components/Garages/Garages';


class App extends Component {

  state = {
    currentgarages: [],

  }

  onGarageChange = garages => {
    this.setState(prevState => ({currentgarages: garages}));
    
  }

  render() {
    return (
      <div className="App">
        <Garages onGarageChange={g => this.onGarageChange(g)}/>
      </div>
    );
  }
}

export default App;
