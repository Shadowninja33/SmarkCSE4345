import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import { withRouter } from "react-router-dom";
import "./Permits.css"


class Permits extends React.Component {
    


    state = {
        permits: [],
    }

    onNext() {
        this.props.setPermits(this.state.permits)
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="Permits-Selection">
                <ButtonToolbar className="button-toolbar">
                    <ToggleButtonGroup className="toggle-button-group text-center pagination-centered" type="checkbox" onChange={ e => this.setState({permits: e})}>
                            <ToggleButton value={1} variant="danger" size="lg">
                                Resident
                            </ToggleButton>

                            <ToggleButton value={2} variant="warning" size="lg">
                                Non-Resident
                            </ToggleButton>

                            <ToggleButton value={3} variant="primary" size="lg">
                                Faculty
                            </ToggleButton>

                            <ToggleButton value={4} variant="secondary" size="lg">
                                Visitor
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

export default withRouter(Permits);