import React from 'react';
import './styles/RegionalTrendsTable.css';

// This is set up as an HTML table
export default class RegionalTrensTable extends React.Component{
    render() {
        return (
            <div>
                <table className='regionalTrendsTable'>
                    <tr className='row1'>
                        <th className='col1'></th>
                        <th className='col2'>Regions</th>
                        <th className='col3'>{this.props.jobsGrowthStartYear} Jobs</th>
                        <th className='col4'>{this.props.jobsGrowthEndYear} Jobs</th>
                        <th className='col5'>Change</th>
                        <th className='col6'>% Change</th>
                    </tr>
                    <tr className='row2'>
                        <td className='row2 col1'><i className='fa fa-circle' aria-hidden='true'></i></td>
                        <td className='row2 col2'>Region</td>
                        <td className='row2 col3'>{this.props.startYearRegionalJobs}</td>
                        <td className='row2 col4'>{this.props.endYearRegionalJobs}</td>
                        <td className='row2 col5'>{this.props.regionChange}</td>
                        <td className='row2 col6'>{this.props.regionPercentChange}%</td>
                    </tr>
                    <tr className='row3'>
                        <td className='row3 col1'><i className='fa fa-square' aria-hidden='true'></i></td>
                        <td className='row3 col2'>State</td>
                        <td className='row3 col3'>{this.props.startYearStateJobs}</td>
                        <td className='row3 col4'>{this.props.endYearStateJobs}</td>
                        <td className='row3 col5'>{this.props.stateChange}</td>
                        <td className='row3 col6'>{this.props.statePercentChange}%</td>
                    </tr>
                    <tr className='row4'>
                        <td className='row4 col1'><i className='fa fa-caret-up fa-2x' aria-hidden='true'></i></td>
                        <td className='row4 col2'>Nation</td>
                        <td className='row4 col3'>{this.props.startYearNationalJobs}</td>
                        <td className='row4 col4'>{this.props.endYearNationalJobs}</td>
                        <td className='row4 col5'>{this.props.nationChange}</td>
                        <td className='row4 col6'>{this.props.nationPercentChange}%</td>
                    </tr>
                </table>   
                {/* <div className='wrapper'>
                    <div className='col1'>
                    className='row1'>Icons
                        <p className='row2'><i className='fa fa-circle' aria-hidden='true'></i></p>
                        <p className='row3'><i className='fa fa-square' aria-hidden='true'></i></p>
                        <p className='row4'><i className='fa fa-caret-up fa-2x' aria-hidden='true'></i></p>
                    </div>
                    <div className='col2'>
                    className='row1 hdr1 ColumnTitle'>Regions
                    className='row2'>Region
                    className='row3'>State
                    className='row4'>Nation
                    </div>
                    <div className='col3'>
                    className='row1 hdr2 ColumnTitle'>{this.props.jobsGrowthStartYear} Jobs
                    className='row2'>{this.props.startYearRegionalJobs}
                    className='row3'>{this.props.startYearStateJobs}
                    className='row4'>{this.props.startYearNationalJobs}
                    </div>
                    <div className='col4'>
                    className='row1 hdr3 ColumnTitle'>{this.props.jobsGrowthEndYear} Jobs
                    className='row2'>{this.props.endYearRegionalJobs}
                    className='row3'>{this.props.endYearStateJobs}
                    className='row4'>{this.props.endYearNationalJobs}
                    </div>
                    <div className='col5'>
                    className='row1 hdr4 ColumnTitle'>Change
                    className='row2'>{this.props.regionChange}
                    className='row3'>{this.props.stateChange}
                    className='row4'>{this.props.nationChange}
                    </div>
                    <div className='col6'>
                    className='row1 hdr5 ColumnTitle'>% Change
                    className='row2'>{this.props.regionPercentChange}%
                    className='row3'>{this.props.statePercentChange}%
                    className='row4'>{this.props.nationPercentChange}%

                    </div>
                </div> */}
            </div>
        )
    }
}