import React from 'react';
import './OccSummary.css';

// This is a class component, as opposted to a functional component
class OccSummary extends React.Component {
    render () {
        return (
            <div className='OccSummary'>
                <div id="occSumTitle">
                    <h5>Occupation Summary for {this.props.occupation}</h5>
                </div>
                {/* This is probably better the way I had it the first time, unless I can figure out how to create li */}
                <div id="numBoxes">
                    <ul id="left">
                        <li className="jobs">
                            <h2>{this.props.numJobs}</h2>
                        </li>
                        <li className="jobs">
                            <h6>Jobs ({this.props.year})</h6>
                        </li>
                        <li className="jobs">
                            <h6>{this.props.percent}% {this.props.aboveBelow} National average</h6>
                        </li>
                    </ul>
                    <ul id="middle">
                        <li className="change">
                            <h2>{this.props.percentChange}%</h2>
                        </li>
                        <li className="change">
                            <h6>% Change ({this.props.yearRange})</h6>
                        </li>
                        <li className="change">
                            <h6>Nation {this.props.natlPercentChange}</h6>
                        </li>
                    </ul>
                    <ul id="right">
                        <li className="earnings">
                            <h2>${this.props.wage}/hr</h2>
                        </li>
                        <li className="earnings">
                            <h6>Median Hourly Earnings</h6>
                        </li>
                        <li className="earnings">
                            <h6>Nation ${this.props.natlWage}/hr</h6>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default OccSummary;