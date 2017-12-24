import React from 'react';
import PageHeader from './PageHeader';
import SectionHeader from './SectionHeader';
import OccupationSummary from './OccupationSummary';
import RegionalTrendsGraph from './RegionalTrendsGraph';
import RegionalTrendsTable from './RegionalTrendsTable';
import IndustriesEmploying from './IndustriesEmploying';
import './styles/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  componentDidMount() {
    fetch('https://api.myjson.com/bins/119um3')
    // fetch('https://www.jasonbase.com/things/dM3J.json')
      .then(response => response.json())
      .then(data => {

        // Is it better practice to set a constant and then set state with the constant, or simply set state directly from the source data?

        // **************************//
        // OCCUPATION SUMMARY SECTION//
        // **************************//
        // Regional Jobs Number (left box)
        const regionalJobsNum = (data.summary.jobs.regional).toLocaleString('en');
        const jobsNationalAvg = data.summary.jobs.national_avg;
        const percentChange = (data.summary.jobs.regional / data.summary.jobs.national_avg * 100).toFixed(0);
        const aboveBelow = data.summary.jobs.regional > data.summary.jobs.national_avg ? "above" : "below";
        // Regional Change (middle box)
        const regionalPlusMinus = data.trend_comparison.regional[0] < data.trend_comparison.regional[data.trend_comparison.regional.length - 1] ? "+" : "-";
        const natlPlusMinus = data.trend_comparison.nation[0] < data.trend_comparison.nation[data.trend_comparison.nation.length - 1] ? "+" : "-";
        // Regional Earnings (right box)
        const regionalEarnings = (data.summary.earnings.regional).toFixed(2);
        const nationalAvgEarnings = (data.summary.earnings.national_avg).toFixed(2);
        // ***********************//
        // REGIONAL TRENDS SECTION//
        // ***********************//
        const startYearRegionalJobs = (data.trend_comparison.regional[0].toLocaleString('en'));
        const endYearRegionalJobs = (data.trend_comparison.regional[data.trend_comparison.regional.length - 1]).toLocaleString('en');
        const startYearStateJobs = (data.trend_comparison.state[0].toLocaleString('en'));
        const endYearStateJobs = (data.trend_comparison.state[data.trend_comparison.state.length - 1]).toLocaleString('en');
        const startYearNationalJobs = (data.trend_comparison.nation[0].toLocaleString('en'));
        const endYearNationalJobs = (data.trend_comparison.nation[data.trend_comparison.nation.length - 1]).toLocaleString('en');
        const regionChange = ((data.trend_comparison.regional[data.trend_comparison.regional.length - 1]) - (data.trend_comparison.regional[0])).toLocaleString('en');
        const stateChange = ((data.trend_comparison.state[data.trend_comparison.state.length - 1]) - (data.trend_comparison.state[0])).toLocaleString('en');
        const nationChange = ((data.trend_comparison.nation[data.trend_comparison.nation.length - 1]) - (data.trend_comparison.nation[0])).toLocaleString('en');
        const regionPercentChange= ((((data.trend_comparison.regional[data.trend_comparison.regional.length - 1]) - (data.trend_comparison.regional[0])) / (data.trend_comparison.regional[0])) * 100).toFixed(1);
        const statePercentChange= ((((data.trend_comparison.state[data.trend_comparison.state.length - 1]) - (data.trend_comparison.state[0])) / (data.trend_comparison.state[0])) * 100).toFixed(1);
        const nationPercentChange= ((((data.trend_comparison.nation[data.trend_comparison.nation.length - 1]) - (data.trend_comparison.nation[0])) / (data.trend_comparison.nation[0])) * 100).toFixed(1);
        // ****************************//
        // INDUSTRIES EMPLOYING SECTION//
        // ****************************//

        // Refactored for HTML table; before: 36 lines of code, after: 8 lines of code
        const industryRow = data.employing_industries.industries.map((industry, i) =>
          <tr key={'row'+(i+1)} className={'row'+(i+1)}>
            <td key={'row'+(i+1)+'col1'} className={'row'+(i+1)+' '+'col1'}><i className="fa fa-building" aria-hidden="true"></i>{industry.title}</td>
            <td key={'row'+(i+1)+'col2'} className={'row'+(i+1)+' '+'col2'}>{industry.in_occupation_jobs.toLocaleString('en')}</td>
            <td key={'row'+(i+1)+'col3'} className={'row'+(i+1)+' '+'col3'}>{((industry.in_occupation_jobs / data.employing_industries.jobs) * 100).toFixed(1)}%</td>
            <td key={'row'+(i+1)+'col4'} className={'row'+(i+1)+' '+'col4'}>{((industry.in_occupation_jobs / industry.jobs) * 100).toFixed(1)}%</td>
          </tr>
        );

        // Set state for everything
        this.setState({ 
          // Page Header & Section Headers
          occupationTitle: data.occupation['title'],
          regionTitle: data.region.title,
          // Occupation Summary
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
          // Regional Trends Table
          startYearRegionalJobs: startYearRegionalJobs,
          endYearRegionalJobs: endYearRegionalJobs,
          startYearStateJobs: startYearStateJobs,
          endYearStateJobs: endYearStateJobs,
          startYearNationalJobs: startYearNationalJobs,
          endYearNationalJobs: endYearNationalJobs,
          regionPercentChange: regionPercentChange,
          statePercentChange: statePercentChange,
          nationPercentChange: nationPercentChange,
          regionChange: regionChange,
          stateChange: stateChange,
          nationChange: nationChange,
          // Industries Employing Table
          industryYear: data.employing_industries.year,
          industryRow: industryRow,
        });
      });
  }

  render() {
    return (
      <div className='App'>
        <PageHeader
          occupationTitle={this.state.occupationTitle}
          msa={this.state.regionTitle}
        />
        <SectionHeader
          sectionTitle="Occupation Summary for "
          occupationTitle={this.state.occupationTitle}
        />
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
        <RegionalTrendsTable
          jobsGrowthStartYear={this.state.jobsGrowthStartYear}
          jobsGrowthEndYear={this.state.jobsGrowthEndYear}
          startYearRegionalJobs={this.state.startYearRegionalJobs}
          endYearRegionalJobs={this.state.endYearRegionalJobs}
          startYearStateJobs={this.state.startYearStateJobs}
          endYearStateJobs={this.state.endYearStateJobs}
          startYearNationalJobs={this.state.startYearNationalJobs}
          endYearNationalJobs={this.state.endYearNationalJobs}
          regionChange={this.state.regionChange}
          stateChange={this.state.stateChange}
          nationChange={this.state.nationChange}
          regionPercentChange={this.state.regionPercentChange}
          statePercentChange={this.state.statePercentChange}
          nationPercentChange={this.state.nationPercentChange}
        />
        <SectionHeader sectionTitle="Industries Employing " occupationTitle={this.state.occupationTitle}/>
        <IndustriesEmploying
          titles={this.state.titles}
          inOccJobs={this.state.inOccJobs}
          percentOfOccInIndustry={this.state.percentOfOccInIndustry}
          percentOfTotalJobsInInd={this.state.percentOfTotalJobsInInd}
          industryYear={this.state.industryYear}
          industryRow={this.state.industryRow}
        />
      </div>
    );
  }
}


export default App;