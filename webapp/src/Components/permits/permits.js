import React from 'react';
import './permits.css'




export class Permits extends React.Component {


    getGarageClass(garage) {
        switch(garage) {
            case 1:
                return 'resident';
            case 2:
                return 'non-resident';
            case 3:
                return 'faculty';
            case 4:
                return 'visitor';
        }
    }

    render() {

        return(
            <div className="permits">
                {
                    this.props.permitlist.map(x => (<i key={x} className={this.getGarageClass(x)}></i>))
                }
            </div>
        );
    };
}

export default Permits;