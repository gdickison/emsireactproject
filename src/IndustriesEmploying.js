import React from 'react';
// import './IndustriesEmploying.css';

class IndustriesEmploying extends React.Component {
    render () {
        return (
            <div className='IndustriesEmploying'>
                <h5>Industries Employing {this.props.occ}</h5>
            </div>
        )
    }
}

export default IndustriesEmploying;