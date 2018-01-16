import React from 'react';

class OccupationSummaryJobs extends React.Component{
    render() {
        return(
            <ul className="occupationSummaryJobs">
                <li className="jobs">
                    <h2>{this.props.regionalJobsNum}</h2>
                </li>
                <li className="jobs">
                    <h6>Jobs ({this.props.regionalJobsYear})</h6>
                </li>
                <li className="jobs">
                    <h6>{this.props.percentChange}% <span className="green">{this.props.aboveBelow}</span> National average</h6>
                </li>
            </ul>
        )
    }
}

export default OccupationSummaryJobs;