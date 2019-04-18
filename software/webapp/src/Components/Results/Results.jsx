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
            <ReactTable data={this.props.data} columns={columns} />
        </>
    ); 
  }

  componentDidMount() {
    
  }
}

export default Results;
