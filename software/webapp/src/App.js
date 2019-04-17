import React, { Component } from 'react';
import './App.css';
import Garages from './Components/Garages/Garages';
import Permits from './Components/Permits/Permits';


import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import SpaceAttributes from './Components/SpaceAttributes/SpaceAttributes';
import Results from './Components/Results/Results';


class App extends Component {

  state = {
    currentgarages: [],
    currentPermits:[],
    currentcovered: false,
    currentcompact: false,
    currentev: false,
  }

  setGarages = garages => {
    this.setState(prevState => ({currentgarages: garages}));
  }

  setPermits = permits => {
    this.setState(prevState => ({currentPermits: permits}));
  }
  
  setAttributes = (covered, compact, ev) => {
    this.setState(prevState => ({currentcovered: covered, currentcompact: compact, currentev: ev}));
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

    const selectAttributes = (props) => {
      return (
      <SpaceAttributes setAttributes={(a, b, c) => this.setAttributes(a, b, c)} />
      );
    }

    const showResults = (props) => {
      return <Results />
    }

    return (
      <div className="App app-routes">
        <Switch>
          <Route exact path="/garages"  component={selectGarages}  />
          <Route path="/permits" component={selectPermits} />
          <Route path="/attributes" component={selectAttributes} />
          <Route path="/results" component={showResults} />
        </Switch>
      </div>
    );
  }
}

export default App;
