import React, { Component } from 'react';
import './App.css';

import ParkingTable from './Components/parkingTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParkingTable />
      </div>
    );
  }
}

export default App;
