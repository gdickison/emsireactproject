import React from 'react';
import PageHeader from './PageHeader';
import SectionHeader from './SectionHeader';
import OccSummary from './OccSummary';
import OccRegionalTrend from './OccRegionalTrend';
import IndustriesEmploying from './IndustriesEmploying';
import FetchData from './FetchData';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // occupationTitle: null,
      // regionTitle: null,
      // regionalJobsNum: null,
      // regionalJobsYear: null,
      // jobsNationalAvg: null,
    }
  }
// State needs to go on the App component, since it has to be available downstream. Each component can have it's own state.
  componentDidMount() {
    fetch('https://api.myjson.com/bins/119um3')
      .then(response => response.json())
      .then(data => {
        this.setState({ 
          occupationTitle: data.occupation['title'],
          regionTitle: data.region.title,
          regionalJobsNum: data.summary.jobs['regional'],
          regionalJobsYear: data.summary.jobs.year,
          jobsGrowthStartYear: data.summary.jobs_growth.start_year,
          jobsGrowthEndYear: data.summary.jobs_growth.end_year,
          regionalJobsGrowth: data.summary.jobs_growth.regional,
          nationalJobsGrowth: data.summary.jobs_growth.national_avg,
          jobsNationalAvg: data.summary.jobs['national_avg'],
          regionalEarnings: data.summary.earnings.regional,
          nationalAvgEarnings: data.summary.earnings.national_avg,
          percentChange: function(regionalJobsNum, jobsNationalAvg) {
            return Number(regionalJobsNum) / Number(jobsNationalAvg);
          },
        });
        // Why is this NaN?
        // const percentChange = function(jobsNationalAvg, regionalJobsNum){
        //   const a = jobsNationalAvg;
        //   const b = regionalJobsNum;
        //   console.log(a, b);
        //    return a / b;
        // };
        // console.log(percentChange());
      });
  }

  render() {
    return (
      <div className='App'>
        {/* occ, msa, and occupation are props. They need to be filled in dynamically from the API */}
        <PageHeader
          occupationTitle={this.state.occupationTitle}
          msa={this.state.regionTitle}
        />
        <SectionHeader
          sectionTitle="Occupation Summary for "
          occupationTitle={this.state.occupationTitle}
        />
        {/* Do I want to break OccSummary up into three components? */}
        <OccSummary
          regionalJobsNum={this.state.regionalJobsNum}
          regionalJobsYear={this.state.regionalJobsYear}
          percent={this.state.percentChange}
          aboveBelow="above"
          regionalJobsGrowth={this.state.regionalJobsGrowth}
          jobsGrowthStartYear={this.state.jobsGrowthStartYear}
          jobsGrowthEndYear={this.state.jobsGrowthEndYear}
          nationalJobsGrowth={this.state.nationalJobsGrowth}
          /* Earnings need to render to two decimal places */
          regionalEarnings={this.state.regionalEarnings}
          nationalAvgEarnings={this.state.nationalAvgEarnings}
        />          
        <SectionHeader sectionTitle="Regional Trends"/>
        <OccRegionalTrend />
        <SectionHeader sectionTitle="Industries Employing " occupationTitle={this.state.occupationTitle}/>
        <IndustriesEmploying />
        <FetchData />
        {/* Why do the console.logs run twice? */}
      </div>
    );
  }
}


export default App;