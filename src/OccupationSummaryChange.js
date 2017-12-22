import React from 'react';

class OccupationSummaryChange extends React.Component{
    render() {
        return(
            <ul id="occupationSummaryChange">
                <li className="change">
                    <h2 className="green">{this.props.regionalPlusMinus}{this.props.regionalJobsGrowth}%</h2>
                </li>
                <li className="change">
                    <h6>% Change ({this.props.jobsGrowthStartYear}-{this.props.jobsGrowthEndYear})</h6>
                </li>
                <li className="change">
                    <h6>Nation: <span className="green">{this.props.natlPlusMinus}{this.props.nationalJobsGrowth}%</span></h6>
                </li>
            </ul>
        )
    }
}

export default OccupationSummaryChange;