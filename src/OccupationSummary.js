import React from 'react';

// This is a class component, as opposted to a functional component
class OccupationSummary extends React.Component {
    render () {
        return (
            <div className='OccSummary'>
                <div id="numBoxes">
                    <ul id="left">
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
                    <ul id="middle">
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
                    <ul id="right">
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
                </div>
            </div>
        )
    }
}

export default OccupationSummary;