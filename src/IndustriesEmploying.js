import React from 'react';
import './styles/IndustriesEmploying.css';

class IndustriesEmploying extends React.Component {
    render() {
        return (
            <table id='IndustriesEmployingTable'>
              <thead>
                <tr className='row0'>
                  <th className='row0 col1'>Industry</th>
                  <th className='row0 col2'>Occupation Jobs in Industry ({this.props.industryYear})</th>
                  <th className='row0 col3'>% of Occupation in Industry ({this.props.industryYear})</th>
                  <th className='row0 col4'>% of Total Jobs in Industry ({this.props.industryYear})</th>
                </tr>
              </thead>
              <tbody>
                {this.props.industryRow}
              </tbody>
            </table>
        );
    }
}


export default IndustriesEmploying;