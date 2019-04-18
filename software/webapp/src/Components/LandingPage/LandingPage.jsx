import React from 'react';
import Button from 'react-bootstrap/Button';
import { withRouter } from "react-router-dom";
import './LandingPage.css';


class LandingPage extends React.Component {


    onNext() {
        this.props.history.push('/garages')
    }


  render() {


    return (
        <div className="d-flex flex-column justify-content-center">
            <div style={{fontSize: "large"}}>Welcome to Smark! In this app you will be able to select which parking garages you would like check, what permits you have, and any additional parking space attibutes.</div>
            <Button varient="Primary" onClick={e => this.onNext()} >Start</Button>       
         </div>

    );
  }
}

export default withRouter(LandingPage);
