import React from 'react';

class OccupationSummaryEarnings extends React.Component{
    render(){
        return(
            <ul id="occupationSummaryEarnings">
                <li className="earnings">
                    <h2>${this.props.regionalEarnings}/hr</h2>
                </li>
                <li className="earnings">
                    <h6>Median Hourly Earnings</h6>
                </li>
                <li className="earnings">
                    <h6>Nation: ${this.props.nationalAvgEarnings}/hr</h6>
                </li>
            </ul>
        )
    }
}

export default OccupationSummaryEarnings;