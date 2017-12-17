import React from 'react';

export default class RegionalTrensTable extends React.Component{
    render() {
        return (
            <div>   
                <h2>Regional Trends Table Goes Here</h2>
                <div>
                    <p>BP</p>
                    <p>BP</p>
                    <p>BP</p>
                </div>
                <div>
                    <h4>Regions</h4>
                    <h5>Region</h5>
                    <h5>State</h5>
                    <h5>Nation</h5>
                </div>
                <div>
                    <h4 className='ColumnTitle'>{this.props.jobsGrowthStartYear} Jobs</h4>
                    <h5>{this.props.startYearRegionalJobs}</h5>
                    <h5>{this.props.startYearStateJobs}</h5>
                    <h5>{this.props.startYearNationalJobs}</h5>
                </div>
                <div>
                    <h4 className='ColumnTitle'>{this.props.jobsGrowthEndYear} Jobs</h4>
                    <h5>{this.props.endYearRegionalJobs}</h5>
                    <h5>{this.props.endYearStateJobs}</h5>
                    <h5>{this.props.endYearNationalJobs}</h5>
                </div>
                <div>
                    <h4 className='ColumnTitle'>Change</h4>
                    <h5>{this.props.regionChange}</h5>
                    <h5>{this.props.stateChange}</h5>
                    <h5>{this.props.nationChange}</h5>
                </div>
                <div>
                    <h4 className='ColumnTitle'>% Change</h4>
                    <h5>{this.props.regionPercentChange}%</h5>
                    <h5>{this.props.statePercentChange}%</h5>
                    <h5>{this.props.nationPercentChange}%</h5>

                </div>
            </div>

        )
    }
}