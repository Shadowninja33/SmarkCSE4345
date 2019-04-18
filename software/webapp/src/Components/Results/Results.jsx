import React from 'react';
import { SpaceRepository } from '../../api';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlug } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';


class Results extends React.Component {
    spaceRepository = new SpaceRepository();

    state = {
        spaces: [],
    }


    render() {
        return (
            <div className="w-100 h-100 d-flex align-content-center">
                <Table className="itemized-results table-light">
                    <Thead>
                        <Tr>
                            <Th>#</Th>
                            <Th>Garage</Th>
                            <Th>Level</Th>
                            <Th>Compact</Th>
                            <Th>Covered</Th>
                            <Th>EV</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            this.state.spaces.map((a, i) =>
                                <Tr key={i}>
                                    <Td>{a.number}</Td>
                                    <Td>{a.garage}</Td>
                                    <Td>{a.level}</Td>
                                    <Td>{(a.compact ? <FontAwesomeIcon icon={faCarSide} size="xl" style={{ color: 'black' }} /> : <FontAwesomeIcon icon={faCarSide} size="xl" style={{ color: 'lightgrey' }} />)}</Td>
                                    <Td>{(a.covered ? <FontAwesomeIcon icon={faHome} size="xl" style={{ color: 'black' }} /> : <FontAwesomeIcon icon={faHome} size="xl" style={{ color: 'lightgrey' }} />)}</Td>
                                    <Td>{(a.ev ? <FontAwesomeIcon icon={faPlug} size="xl" style={{ color: 'green' }} /> : <FontAwesomeIcon icon={faPlug} size="xl" style={{ color: 'lightgrey' }} />)}</Td>
                                </Tr>
                            )
                        }
                    </Tbody>
                </Table>
            </div>
        );
    }

    componentDidMount() {
        // this.spaceRepository.getSpaces(this.props.query)
        // .then(spaces => this.setState({ spaces }));
        this.setState({spaces: this.props.data});
    }
}

export default Results;
