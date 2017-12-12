import React from 'react';
import PageHeader from './PageHeader';
import SectionHeader from './SectionHeader';
import OccSummary from './OccSummary';
import OccRegionalTrend from './OccRegionalTrend';
import IndustriesEmploying from './IndustriesEmploying';
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

  componentDidMount() {
    fetch('https://api.myjson.com/bins/119um3')
      .then(response => response.json())
      .then(json => {
        this.setState({ 
          occupationTitle: json.occupation.title,
          regionTitle: json.region.title,
          regionalJobsNum: json.summary.jobs.regional,
          regionalJobsYear: json.summary.jobs.year,
          jobsGrowthStartYear: json.summary.jobs_growth.start_year,
          jobsGrowthEndYear: json.summary.jobs_growth.end_year,
          regionalJobsGrowth: json.summary.jobs_growth.regional,
          nationalJobsGrowth: json.summary.jobs_growth.national_avg,
          jobsNationalAvg: json.summary.jobs.national_avg,
          regionalEarnings: json.summary.earnings.regional,
          nationalAvgEarnings: json.summary.earnings.national_avg,
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
          percent="190"
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
      </div>
    );
  }
}


export default App;