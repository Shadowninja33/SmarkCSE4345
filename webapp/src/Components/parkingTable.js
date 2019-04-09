import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import Permits from './permits/permits'

export class ParkingTable extends React.Component {
    data = [{
        number: 1,
        permits: [1, 2, 3],
        garage: "binkley"

        },
    ]
    
    columns = [{
        Header: 'Number',
        accessor: 'number' // String-based value accessors!
      }, {
        Header: 'Permits',
        accessor: 'permits',
        Cell: <span className='permits'><Permits permitlist={this.permits} /></span> // Custom cell components!
      }, {
        Header: "Garage", // Custom header components!
        accessor: 'garage'
      }]
    
    render(){
      return <ReactTable data={this.data} columns={this.columns} />
    }
}

export default ParkingTable;