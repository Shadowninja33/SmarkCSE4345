import React from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css'


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
            <div className="table-responsive">
                <table className="table table-striped table-condensed table-light">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Garage</th>
                            <th>Level</th>
                            <th>Compact</th>
                            <th>Covered</th>
                            <th>EV</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.data.map((a, i) =>
                                <tr key={i}>
                                    <td>{a.number}</td>
                                    <td>{a.garage}</td>
                                    <td>{a.level}</td>
                                    <td>{a.compact}</td>
                                    <td>{a.covered}</td>
                                    <td>{a.ev}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {/* <ReactTable className="-striped bg-light" data={this.props.data} columns={columns} /> */}

        </>
    );
}

export default Results;
