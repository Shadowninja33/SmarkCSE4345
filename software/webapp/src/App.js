import React, { Component } from 'react';
import './App.css';
import Garages from './Components/Garages/Garages';
import Permits from './Components/Permits/Permits';

import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";


class App extends Component {

  state = {
    currentgarages: [],
    currentPermits:[],

  }

  setGarages = garages => {
    this.setState(prevState => ({currentgarages: garages}));
  }

  setPermits = permits => {
    this.setState(prevState => ({currentPermits: permits}));
  }
  

  render() {

    const selectGarages = (props) => {
      return (
        <Garages setGarages={g => this.setGarages(g)} />
      );
    }

    const selectPermits = (props) => {
      return (
        <Permits setPermits={p => this.setPermits(p)} />
      );
    }

    return (
      <div className="App app-routes">
        <Switch>
          <Route exact path="/garages"  component={selectGarages}  />
          <Route path="/permits" component={selectPermits} />
        </Switch>
      </div>
    );
  }
}

export default App;
