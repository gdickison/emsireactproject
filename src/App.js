import React from 'react';
import PageHeader from './PageHeader';
import SectionHeader from './SectionHeader';
import OccupationSummary from './OccupationSummary';
import RegionalTrendsGraph from './RegionalTrendsGraph';
import RegionalTrendsTable from './RegionalTrendsTable';
import IndustriesEmploying from './IndustriesEmploying';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
// State needs to go on the App component, since it has to be available downstream. Each component can have it's own state.
  componentDidMount() {
    fetch('https://www.jasonbase.com/things/dM3J.json')
      .then(response => response.json())
      .then(data => {
        // Occupation Summary section
        const regionalJobsNum = (data.summary.jobs.regional).toLocaleString('en');
        const jobsNationalAvg = data.summary.jobs.national_avg;
        const percentChange = (data.summary.jobs.regional / data.summary.jobs.national_avg * 100).toFixed(0);
        const aboveBelow = data.summary.jobs.regional > data.summary.jobs.national_avg ? "above" : "below";
        const regionalPlusMinus = data.trend_comparison.regional[0] < data.trend_comparison.regional[data.trend_comparison.regional.length - 1] ? "+" : "-";
        const natlPlusMinus = data.trend_comparison.nation[0] < data.trend_comparison.nation[data.trend_comparison.nation.length - 1] ? "+" : "-";
        const regionalEarnings = (data.summary.earnings.regional).toFixed(2);
        const nationalAvgEarnings = (data.summary.earnings.national_avg).toFixed(2);
        // Regional Trends section

        // Industries Employing section
        const inOccIndustriesList = data.employing_industries.industries;
        const titlesArray = inOccIndustriesList.map((job) => job.title);
        const titles = titlesArray.map((title, i) => <li key={i}>{title}</li>);
        const jobsArray = inOccIndustriesList.map((job) => job.in_occupation_jobs);
        const inOccJobs = jobsArray.map((inOccJob, i) => <li key={i}>{inOccJob}</li>);

        // Console.log(something) just to make sure it's working
        console.log(inOccIndustriesList);
        console.log(titles);
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
          regionalEarnings: regionalEarnings,
          nationalAvgEarnings: nationalAvgEarnings,
          percentChange: percentChange,
          aboveBelow: aboveBelow,
          regionalPlusMinus: regionalPlusMinus,
          natlPlusMinus: natlPlusMinus,
          inOccIndustriesList: inOccIndustriesList,
          titles: titles,
          inOccJobs: inOccJobs,
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
        <OccupationSummary
          regionalJobsNum={this.state.regionalJobsNum}
          regionalJobsYear={this.state.regionalJobsYear}
          percentChange={this.state.percentChange}
          aboveBelow={this.state.aboveBelow}
          regionalPlusMinus={this.state.regionalPlusMinus}
          regionalJobsGrowth={this.state.regionalJobsGrowth}
          jobsGrowthStartYear={this.state.jobsGrowthStartYear}
          jobsGrowthEndYear={this.state.jobsGrowthEndYear}
          natlPlusMinus={this.state.natlPlusMinus}
          nationalJobsGrowth={this.state.nationalJobsGrowth}
          regionalEarnings={this.state.regionalEarnings}
          nationalAvgEarnings={this.state.nationalAvgEarnings}
          
        />          
        <SectionHeader sectionTitle="Regional Trends"/>
        <RegionalTrendsGraph />
        <RegionalTrendsTable />
        <SectionHeader sectionTitle="Industries Employing " occupationTitle={this.state.occupationTitle}/>
        <IndustriesEmploying
          regionTitle={this.state.industries}
          titles={this.state.titles}
          inOccJobs={this.state.inOccJobs}
        />
      </div>
    );
  }
}


export default App;