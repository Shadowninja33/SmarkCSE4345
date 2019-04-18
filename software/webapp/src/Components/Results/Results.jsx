import React from 'react';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlug } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';


export const Results = (props) => {

    const columns = [{
        Header: '#',
        accessor: 'number',
        minWidth: 30
    }, {
        Header: 'Garage',
        accessor: 'garage',
        minWidth: 150
    }, {
        Header: 'Level',
        accessor: 'level',
        minWidth: 50
    }, {
        Header: 'Compact',
        accessor: 'compact',
        minWidth: 50
    }, {
        Header: 'Covered',
        accessor: 'covered',
        minWidth: 50
    }, {
        Header: 'EV',
        accessor: 'ev',
        minWidth: 30
    }]

    return (
        <>
            <Table className="table-light">
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
                        props.data.map((a, i) =>
                            <Tr key={i}>
                                <Td>{a.number}</Td>
                                <Td>{a.garage}</Td>
                                <Td>{a.level}</Td>
                                <Td>{(a.compact ? <FontAwesomeIcon icon={faCarSide} size="xl" style={{color: 'black'}} /> : <FontAwesomeIcon icon={faCarSide} size="xl" style={{color: 'lightgrey'}} /> )}</Td>
                                <Td>{(a.covered ? <FontAwesomeIcon icon={faHome} size="xl" style={{color: 'black'}} /> : <FontAwesomeIcon icon={faHome} size="xl" style={{color: 'lightgrey'}} />)}</Td>
                                <Td>{(a.ev ? <FontAwesomeIcon icon={faPlug} size="xl" style={{color: 'green'}} /> : <FontAwesomeIcon icon={faPlug} size="xl" style={{color: 'lightgrey'}} /> )}</Td>
                            </Tr>
                        )
                    }
                </Tbody>
            </Table>
        </>
    );
}

export default Results;
