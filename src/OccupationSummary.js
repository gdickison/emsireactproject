import React from 'react';
import './styles/OccupationSummary.css';
import OccupationSummaryJobs from './OccupationSummaryJobs';
import OccupationSummaryChange from './OccupationSummaryChange';
import OccupationSummaryEarnings from './OccupationSummaryEarnings';

class OccupationSummary extends React.Component {
    render () {
        return (
            <div className='OccSummary'>
                <div className="occupationSummaryBoxes">
                    <OccupationSummaryJobs
                        regionalJobsNum={this.props.regionalJobsNum}
                        regionalJobsYear={this.props.regionalJobsYear}
                        percentChange={this.props.percentChange}
                        aboveBelow={this.props.aboveBelow}
                    />
                    <OccupationSummaryChange
                        regionalPlusMinus={this.props.regionalPlusMinus}
                        regionalJobsGrowth={this.props.regionalJobsGrowth}
                        jobsGrowthStartYear={this.props.jobsGrowthStartYear}
                        jobsGrowthEndYear={this.props.jobsGrowthEndYear}
                        natlPlusMinus={this.props.natlPlusMinus}
                        nationalJobsGrowth={this.props.nationalJobsGrowth}
                    />
                    <OccupationSummaryEarnings
                        regionalEarnings={this.props.regionalEarnings}
                        nationalAvgEarnings={this.props.nationalAvgEarnings}
                    />
                </div>
            </div>
        )
    }
}

export default OccupationSummary;