import React, { Component } from 'react';
import './App.css';
import Garages from './Components/Garages/Garages';
import Permits from './Components/Permits/Permits';


import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import SpaceAttributes from './Components/SpaceAttributes/SpaceAttributes';
import Results from './Components/Results/Results';
import LandingPage from './Components/LandingPage/LandingPage';

class App extends Component {

  state = {
    currentgarages: [],
    currentPermits: [],
    currentcovered: false,
    currentcompact: false,
    currentev: false,
  }

    data = [{
      number: 1,
      garage: 'Binkley',
      level: 2,
      compact: true,
      covered: true,
      ev: true
    }, {
      number: 2,
      garage: 'Moody',
      level: 1,
      compact: true,
      covered: false,
      ev: false
    }, {
      number: 3,
      garage: 'Airline',
      level: 1,
      compact: true,
      covered: false,
      ev: true
    }, {
      number: 4,
      garage: 'Moody',
      level: 5,
      compact: true,
      covered: false,
      ev: false
    }, {
      number: 5,
      garage: 'Mustang',
      level: 3,
      compact: false,
      covered: false,
      ev: false
    }]

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
      return <Results data={this.data} query={this.state} />
    }

    return (
      <div className="App app-routes">
        <Switch>
          <Route exact path ="/" component={LandingPage} />
          <Route path="/garages"  component={selectGarages}  />
          <Route path="/permits" component={selectPermits} />
          <Route path="/attributes" component={selectAttributes} />
          <Route path="/results" component={showResults} />
        </Switch>
      </div>
    );
  }
}

export default App;
