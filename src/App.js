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
        const regionalJobsNum = (data.summary.jobs.regional).toLocaleString('en');
        const jobsNationalAvg = data.summary.jobs.national_avg;
        console.log(regionalJobsNum, jobsNationalAvg);
        const percentChange = (data.summary.jobs.regional / data.summary.jobs.national_avg * 100).toFixed(0);
        const aboveBelow = data.summary.jobs.regional > data.summary.jobs.national_avg ? "above" : "below";
        console.log(percentChange);
        this.setState({ 
          occupationTitle: data.occupation['title'],
          regionTitle: data.region.title,
          regionalJobsNum: regionalJobsNum,
          regionalJobsYear: data.summary.jobs.year,
          jobsGrowthStartYear: data.summary.jobs_growth.start_year,
          jobsGrowthEndYear: data.summary.jobs_growth.end_year,
          regionalJobsGrowth: data.summary.jobs_growth.regional,
          nationalJobsGrowth: data.summary.jobs_growth.national_avg,
          jobsNationalAvg: jobsNationalAvg,
          regionalEarnings: data.summary.earnings.regional,
          nationalAvgEarnings: data.summary.earnings.national_avg,
          percentChange: percentChange,
          aboveBelow: aboveBelow,
        });
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
          percentChange={this.state.percentChange}
          aboveBelow={this.state.aboveBelow}
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
        {/* Why do the console.logs run twice? */}
      </div>
    );
  }
}


export default App;