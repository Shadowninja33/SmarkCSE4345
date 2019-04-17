import React from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css'


class Results extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  state = {
      
  }





  render() {

    const data = [{
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
    }
]

    const columns = [{
        Header: '#',
        accessor: 'number'
    }, {
        Header: 'Garage',
        accessor: 'garage'
    }, {
        Header: 'Level',
        accessor: 'level',
    }, {
        Header: 'Compact',
        accessor: 'compact'
    }, {
        Header: 'Covered',
        accessor: 'covered'
    }, {
        Header: 'EV',
        accessor: 'ev'
    }]

    return (

        <>
            <ReactTable data={data} columns={columns} />
        </>
    ); 
  }

  componentDidMount() {
    
  }
}

export default Results;
