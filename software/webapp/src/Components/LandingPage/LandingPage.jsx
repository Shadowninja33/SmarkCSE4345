import React from 'react';
import Button from 'react-bootstrap/Button';
import { withRouter } from "react-router-dom";


class LandingPage extends React.Component {


    onNext() {
        this.props.history.push('/garages')
    }


  render() {


    return (
        <>

            <Button varient="Primary" onClick={e => this.onNext()} >Start</Button>
        </>

    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default withRouter(LandingPage);
