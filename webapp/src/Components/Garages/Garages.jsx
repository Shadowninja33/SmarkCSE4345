import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Garages.css"


class Garages extends React.Component {
    
    state = {
        garages: [],
    }

    render() {
        return (
        
            <ButtonToolbar className="button-toolbar">
                <ToggleButtonGroup className="toggle-button-group" type="checkbox" onChange={ e => this.setState({garages: e})}>
                    <ToggleButton value={1} variant="primary" size="lg">
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

        );
    }
}

export default Garages;