import React, { Component } from 'react';
import './App.css';
import Garages from './Components/Garages/Garages';


class App extends Component {

  setGarage = garage => {
    this.setState({currentgarage: garage});
  }

  render() {
    return (
      <div className="App">
        <Garages />
      </div>
    );
  }
}

export default App;
