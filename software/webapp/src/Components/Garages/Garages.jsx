import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Garages.css"


class Garages extends React.Component {
    


    state = {
        garages: [],
    }

    onNext() {
        this.props.setGarages(this.state.garages)
    }

    render() {
        return (
            <div className="Garages-Selection">
                <ButtonToolbar className="button-toolbar">
                    <ToggleButtonGroup className="toggle-button-group text-center pagination-centered" type="checkbox" onChange={ e => this.setState({garages: e})}>
                            <ToggleButton value={10} variant="primary" size="lg">
                                Airline
                            </ToggleButton>

                            <ToggleButton value={2} variant="primary" size="lg">
                                Binkley
                            </ToggleButton>

                            <ToggleButton value={3} variant="primary" size="lg">
                                Daniel
                            </ToggleButton>

                            <ToggleButton value={4} variant="primary" size="lg">
                                Meadows
                            </ToggleButton>
                        
                            <ToggleButton value={5} variant="primary" size="lg">
                                Moody
                            </ToggleButton>
                        
                            <ToggleButton value={6} variant="primary" size="lg">
                                Mustang
                            </ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>

                <Button className="submit" onClick={e => this.onNext()}>
                    Next >>
                </Button>
            </div>
        );
    }
}

export default Garages;