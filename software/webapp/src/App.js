import React, { Component } from 'react';
import './App.css';
import Garages from './Components/Garages/Garages';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class App extends Component {

  state = {
    currentgarages: [],

  }

  setGarages = garages => {
    this.setState(prevState => ({currentgarages: garages}));
  }

  render() {
    return (
      <div className="App app-routes">
        <Switch>
          <Route exact path="/garage"  component={Garages} setGarages={g => this.setGarages(g)} />
        </Switch>
      </div>
    );
  }
}

export default App;
