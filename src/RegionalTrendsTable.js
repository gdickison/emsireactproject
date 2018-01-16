import React from 'react';
import './styles/RegionalTrendsTable.css';

// This is set up as an HTML table
export default class RegionalTrensTable extends React.Component{
    render() {
        return (
            <table className='regionalTrendsTable'>
                <thead>
                    <tr className='row1'>
                        <th className='row1 col1'></th>
                        <th className='row1 col2'>Regions</th>
                        <th className='row1 col3'>{this.props.jobsGrowthStartYear} Jobs</th>
                        <th className='row1 col4'>{this.props.jobsGrowthEndYear} Jobs</th>
                        <th className='row1 col5'>Change</th>
                        <th className='row1 col6'>% Change</th>
                    </tr>
                </thead>
                <tbody>
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
                        <td className='row4 col1'><span className='triangle'>&#x25B2;</span></td>
                        <td className='row4 col2'>Nation</td>
                        <td className='row4 col3'>{this.props.startYearNationalJobs}</td>
                        <td className='row4 col4'>{this.props.endYearNationalJobs}</td>
                        <td className='row4 col5'>{this.props.nationChange}</td>
                        <td className='row4 col6'>{this.props.nationPercentChange}%</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}