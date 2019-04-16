import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Garages extends React.Component {
    
    render() {
        return (
            <Container>
                <ButtonToolbar>
                    <Row>
                        <Col>
                            <Button variant="primary" size="lg">
                                Airline
                            </Button>
                        </Col>
                        <Col>    
                            <Button variant="primary" size="lg">
                                Binkley
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="primary" size="lg">
                                Daniel
                            </Button>
                        </Col>
                    </Row>
                </ButtonToolbar>
                
                <ButtonToolbar>
                    <Row>
                        <Col>
                            <Button variant="primary" size="lg">
                                Meadows
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="primary" size="lg">
                                Moody
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="primary" size="lg">
                                Mustang
                            </Button>
                        </Col>
                    </Row>
                </ButtonToolbar>
            </Container>
        );
    }
}

export default Garages;