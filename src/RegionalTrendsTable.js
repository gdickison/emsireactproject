import React from 'react';

export default class RegionalTrensTable extends React.Component{
    render() {
        return (
            <div>   
                <div className="wrapper">
                    <div className='col1'>
                        <h4 className="row1">Icons</h4>
                        <p className="row2"><i class="fa fa-circle" aria-hidden="true"></i></p>
                        <p className="row3"><i class="fa fa-square" aria-hidden="true"></i></p>
                        <p className="row4"><i class="fa fa-caret-up fa-2x" aria-hidden="true"></i></p>
                    </div>
                    <div className='col2'>
                        <h4 className="row1 hdr1">Regions</h4>
                        <h5 className="row2">Region</h5>
                        <h5 className="row3">State</h5>
                        <h5 className="row4">Nation</h5>
                    </div>
                    <div className='col3'>
                        <h4 className='row1 hdr2 ColumnTitle'>{this.props.jobsGrowthStartYear} Jobs</h4>
                        <h5 className="row2">{this.props.startYearRegionalJobs}</h5>
                        <h5 className="row3">{this.props.startYearStateJobs}</h5>
                        <h5 className="row4">{this.props.startYearNationalJobs}</h5>
                    </div>
                    <div className='col4'>
                        <h4 className='row1 hdr3 ColumnTitle'>{this.props.jobsGrowthEndYear} Jobs</h4>
                        <h5 className="row2">{this.props.endYearRegionalJobs}</h5>
                        <h5 className="row3">{this.props.endYearStateJobs}</h5>
                        <h5 className="row4">{this.props.endYearNationalJobs}</h5>
                    </div>
                    <div className='col5'>
                        <h4 className='row1 hdr4 ColumnTitle'>Change</h4>
                        <h5 className="row2">{this.props.regionChange}</h5>
                        <h5 className="row3">{this.props.stateChange}</h5>
                        <h5 className="row4">{this.props.nationChange}</h5>
                    </div>
                    <div className='col6'>
                        <h4 className='row1 hdr5 ColumnTitle'>% Change</h4>
                        <h5 className="row2">{this.props.regionPercentChange}%</h5>
                        <h5 className="row3">{this.props.statePercentChange}%</h5>
                        <h5 className="row4">{this.props.nationPercentChange}%</h5>

                    </div>
                </div>
                
            </div>

        )
    }
}